import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { name, desc, bgImg, logo, onClick } = this.props;

    return (
      <section className="wrapper card-item" onClick={onClick}>
        <div className="card-image">
          <img src={bgImg} />
        </div>
        <div className="card-icon">
          <img src={logo} />
        </div>
        <div className="card-info">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Card.defaultProps = {
  onClick: () => {}
};

export default Card;
