import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSavedCartIDs, savedProductLocalStorage,
  removeProductLocalStorage, removeAllProductLocalStorage } from '../services/savedCart';

export default class ShoppingCart extends Component {
  state = {
    filterProducts: [],
  };

  componentDidMount() {
    this.quantifyProducts();
  }

  quantifyProducts = () => {
    const products = getSavedCartIDs();
    const setProducts = new Set();
    const productsAndQuantity = products.reduce((acc, product) => {
      const filterProductId = products.filter((p) => p.id === product.id);
      return [...acc, {
        product: filterProductId[0],
        quantity: filterProductId.length,
      }];
    }, []);
    const filterProducts = productsAndQuantity.filter(({ product }) => {
      const dupProduct = setProducts.has(product.id);
      setProducts.add(product.id);
      return !dupProduct;
    });
    this.setState({ filterProducts });
  };

  increaseProduct = (product) => {
    savedProductLocalStorage(product);
    this.quantifyProducts();
  };

  decreaseProduct = (product) => {
    removeProductLocalStorage(product);
    this.quantifyProducts();
  };

  removeProduct = (product) => {
    removeAllProductLocalStorage(product);
    this.quantifyProducts();
  };

  render() {
    const { filterProducts } = this.state;
    const cart = (filterProducts.map(({ product, quantity }) => (
      <li key={ product.id }>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ `R$ ${product.price}` }</p>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          onClick={ () => this.increaseProduct(product) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => this.decreaseProduct(product) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.removeProduct(product) }
          data-testid="remove-product"
        >
          remove
        </button>
      </li>
    )));

    return (
      <div>
        <Link to="/">Voltar</Link>
        { filterProducts.length > 0 ? cart : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) }
      </div>
    );
  }
}
