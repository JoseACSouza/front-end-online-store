import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { savedProductLocalStorage } from '../services/savedCart';
import EvaluationForm from '../components/EvaluationForm';

class DetailsProduct extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({ data, id });
  };

  addCart = async () => {
    const { data } = this.state;
    await savedProductLocalStorage(data);
  };

  render() {
    const { data, id } = this.state;
    const { title, thumbnail, price, attributes } = data;

    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p data-testid="product-detail-price">{ price }</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <table>
          <tbody>
            { attributes?.map((attribute) => (
              <tr key={ attribute.id }>
                <td>{ attribute.name }</td>
                <td>{ attribute.value_name }</td>
              </tr>
            )) }
          </tbody>
        </table>
        <Link
          to="/shoppingCart"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>
        <button
          type="button"
          onClick={ () => this.addCart() }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <EvaluationForm id={ id } />
      </div>
    );
  }
}

DetailsProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DetailsProduct;
