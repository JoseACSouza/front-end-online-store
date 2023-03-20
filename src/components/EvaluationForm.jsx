import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import RatingCard from './RatingCard';
import { savedEvaluation } from '../services/savedCart';

class EvaluationForm extends Component {
  state = {
    isError: false,
  };

  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState({ [target.name]: value });
  };

  validateFields = () => {
    const { rating, email } = this.state;
    const check = (Number(rating) > 0 && email.length > 0);
    console.log(check);
    this.setState({ isError: !check });
  };

  handleButton = () => {
    const { email, text, rating, isError } = this.state;
    const { id } = this.props;
    this.validateFields();
    const evaluate = {
      email,
      text,
      rating,
    };
    if (isError) {
      savedEvaluation(evaluate, id);
    }
  };

  render() {
    const { isError, text, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              placeholder="Email"
              id="email"
              name="email"
              value={ email }
              data-testid="product-detail-email"
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="evaluation">
            <input
              placeholder="Mensagem (opcional)"
              id="evaluation"
              name="rating"
              value="1"
              type="radio"
              data-testid="1-rating"
              onChange={ this.handleInputChange }
            />
            <input
              id="evaluation"
              name="rating"
              value="2"
              type="radio"
              data-testid="2-rating"
              onChange={ this.handleInputChange }
            />
            <input
              id="evaluation"
              name="rating"
              value="3"
              type="radio"
              data-testid="3-rating"
              onChange={ this.handleInputChange }
            />
            <input
              id="evaluation"
              name="rating"
              value="4"
              type="radio"
              data-testid="4-rating"
              onChange={ this.handleInputChange }
            />
            <input
              id="evaluation"
              name="rating"
              value="5"
              type="radio"
              data-testid="5-rating"
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="text">
            <textarea
              id="text"
              name="text"
              value={ text }
              data-testid="product-detail-evaluation"
              onChange={ this.handleInputChange }
            />
          </label>
          <label htmlFor="button">
            <button
              name="button"
              type="button"
              data-testid="submit-review-btn"
              // disabled={ isDisable }
              onClick={ this.handleButton }
            >
              Avaliar
            </button>
          </label>
        </form>
        { isError && <p data-testid="error-msg">Campos inválidos</p> }

      </div>
    );
  }
}

EvaluationForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EvaluationForm;
