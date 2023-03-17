export async function getCategories() {
  // Implemente aqui
  const fetCategorys = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return fetCategorys;
}
console.log(getCategories());
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId !== undefined) {
    const fetCategory = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)).json();
    return fetCategory;
  } if (query !== undefined) {
    const fetQuery = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${query}`)).json();
    return fetQuery;
  }
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

export async function getProductById() {
  const fetQuery = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${QUERY}`)).json();
  return fetQuery;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
