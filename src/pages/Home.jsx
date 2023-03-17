import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <CategoriesList />
      </div>

    );
  }
}

export default Home;
