import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingCard extends Component {
  render() {
    const { email, text, rating } = this.props;

    return (
      <div>
        <p data-testid="review-card-email">{ email }</p>
        <p data-testid="review-card-evaluation">{ text }</p>
        <p data-testid="review-card-rating">{ rating }</p>
      </div>
    );
  }
}

RatingCard.propTypes = {
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
