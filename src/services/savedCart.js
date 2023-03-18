export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const savedProductLocalStorage = (product) => {
  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, product];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};
