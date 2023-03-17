export async function getCategories() {
  // Implemente aqui
  const fetCategorys = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetCategorys;
}
console.log(getCategories());
export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const fetCategory = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`)).json();
  const fetQuery = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${QUERY}`)).json();
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  return {
    fetCategory,
    fetQuery,
  };
}

export async function getProductById() {
  const fetQuery = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${QUERY}`)).json();
  return fetQuery;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
