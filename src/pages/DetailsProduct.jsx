import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class DetailsProduct extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
    attributes: [],
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({ ...data });
  };

  render() {
    const { title, thumbnail, price, attributes } = this.state;

    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p data-testid="product-detail-price">{ price }</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <table>
          { attributes.map((attribute) => (
            <tr key={ attribute.id }>
              <td>{ attribute.name }</td>
              <td>{ attribute.value_name }</td>
            </tr>
          )) }
        </table>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Adicionar ao Carrinho
        </Link>
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
