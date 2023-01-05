import React from 'react';
import shannon from './images/shannon.jpg';

import './LandingPage.css';

export default function LandingPage() {
  return (
      <>
        <div className="landing-page_image-overlay">
            <img src={shannon} className="landing-page_image" alt="hero" />
        </div>
      </>
  );
}
