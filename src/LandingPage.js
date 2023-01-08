import React from 'react';
import shannon from './images/shannon.jpg';

import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <img className="landing-page__image" src={shannon} />
    </div>
  );
}
