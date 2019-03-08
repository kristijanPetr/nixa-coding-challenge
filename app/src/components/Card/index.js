import React from 'react';
import bgImg1 from '../../assets/hiking@2x.png';
import logoOverlay from '../../assets/icn_hiking.svg';
const Card = ({ title, bgImg, description, logo }) => {
  return (
    <section className="wrapper card-item">
      <div className="card-image">
        <img src={bgImg1} />
      </div>
      <div className="card-icon">
        <img src={logoOverlay} />
      </div>
      <div className="card-info">
        <h1>Surfing</h1>
        <p>Ocean Beach</p>
      </div>
    </section>
  );
};

export default Card;
