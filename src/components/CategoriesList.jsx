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
        {categories.map((categoria) => (
          <button data-testid="category" htmlFor="" key={ categoria.id }>
            {categoria.id}
          </button>
        ))}
      </div>
    );
  }
}
export default CategoriesList;
