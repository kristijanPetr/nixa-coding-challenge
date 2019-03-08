import React, { Component } from 'react';
import Card from '../Card';

import './index.css';

class CardList extends Component {
  render() {
    return (
      <section className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}

export default CardList;
