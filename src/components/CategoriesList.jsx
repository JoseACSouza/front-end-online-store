import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        { categories.map((categoria) => (
          <li key={ categoria.id }>
            <label htmlFor={ categoria.id }>
              <input
                id={ categoria.id }
                name="category"
                type="radio"
                data-testid="category"
              />
              { categoria.name }
            </label>
          </li>
        )) }
      </div>
    );
  }
}
export default CategoriesList;
