import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {
  fetProductsByQuery,
  getCategories,
  fetProductsByCategory,
} from '../services/api';

class Home extends React.Component {
  state = {
    txtSearch: '',
    results: [],
    categories: [],
  };

  componentDidMount() {
    this.getCategoriesData();
  }

  getCategoriesData = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  onInputClick = async ({ target }) => {
    const data = await fetProductsByCategory(target.id);
    this.setState({ ...data });
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
    const { txtSearch, results, categories } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <ul>
          { categories.map((categoria) => (
            <li key={ categoria.id }>
              <label htmlFor={ categoria.id }>
                <input
                  id={ categoria.id }
                  name="category"
                  type="radio"
                  data-testid="category"
                  onClick={ this.onInputClick }
                />
                { categoria.name }
              </label>
            </li>
          )) }
        </ul>
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
              <Link
                to={ `detailsProduct/${product.id}` }
                data-testid="product-detail-link"
              >
                <ProductCard { ...product } />
              </Link>
            </li>
          ))) : <p>Nenhum produto foi encontrado</p> }
        </ul>
      </div>

    );
  }
}

export default Home;
