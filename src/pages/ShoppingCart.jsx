import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: true,
    };
  }

  render() {
    const { isEmpty } = this.state;
    return (
      <div>
        { isEmpty ? (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        ) : <div /> }
      </div>
    );
  }
}
