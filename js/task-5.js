function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const text = document.querySelector('.text');
const btn=document.querySelector(".back-btn")

button.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

  const red = parseInt(randomColor.substring(1, 3), 16);
  const green = parseInt(randomColor.substring(3, 5), 16);
  const blue = parseInt(randomColor.substring(5, 7), 16);

  const averageColor = (red + green + blue) / 3;
  const blueShade = blue / (red + green + blue);

  if (averageColor < 128) {
    colorSpan.style.color = 'white';
    text.style.color = 'white';
    btn.style.color = 'white';
    button.style.boxShadow = '0 0 10px white';
  } else {
    colorSpan.style.color = 'black';
    text.style.color = 'black';
    btn.style.color = 'black';
    button.style.boxShadow = 'none';
  }

   if (blueShade > 0.5) {
    button.style.textShadow = '0 0 10px white';
  } else {
    button.style.textShadow = 'none';
  }
});
