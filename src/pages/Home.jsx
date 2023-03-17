import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import ProductCard from '../components/ProductCard';
import { fetProductsByQuery } from '../services/api';

class Home extends React.Component {
  state = {
    txtSearch: '',
    results: [],
  };

  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState({ [target.name]: value });
  };

  btnSearch = async () => {
    const { txtSearch } = this.state;
    const data = await fetProductsByQuery(txtSearch);
    this.setState({ ...data });
  };

  render() {
    const { txtSearch, results } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <CategoriesList />
        <div>
          <input
            type="text"
            name="txtSearch"
            value={ txtSearch }
            onChange={ this.handleInputChange }
            data-testid="query-input"
          />
          <button
            type="submit"
            onClick={ this.btnSearch }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <ul>
          { results.length > 0 ? (results.map((product) => (
            <li key={ product.id }>
              <ProductCard { ...product } />
            </li>
          ))) : <p>Nenhum produto foi encontrado</p> }
        </ul>
      </div>

    );
  }
}

export default Home;
