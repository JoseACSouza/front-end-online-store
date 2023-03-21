export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const savedProductLocalStorage = (product) => {
  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, product];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

export const removeProductLocalStorage = (product) => {
  const cartProducts = getSavedCartIDs();
  const indexProduct = cartProducts
    .indexOf(cartProducts.find((item) => item.id === product.id));
  const newCartProducts = cartProducts.filter((item) => item.id === product.id);
  if (newCartProducts.length > 1) {
    cartProducts.splice(indexProduct, 1);
  }
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};

export const removeAllProductLocalStorage = (product) => {
  const cartProducts = getSavedCartIDs();
  const newCartProducts = cartProducts.filter((item) => item.id !== product.id);
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

export const getEvaluation = (id) => {
  const localEvaluation = localStorage.getItem(id);
  return localEvaluation ? JSON.parse(localEvaluation) : [];
};

export const savedEvaluation = (data, id) => {
  const localEvaluation = getEvaluation(id);
  const newLocalEvaluation = [...localEvaluation, data];
  localStorage.setItem(id, JSON.stringify(newLocalEvaluation));
};
