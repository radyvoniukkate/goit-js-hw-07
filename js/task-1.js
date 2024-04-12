const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
});
