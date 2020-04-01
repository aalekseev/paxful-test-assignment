import React from 'react';
import './CallToActionButton.scss';

const CallToActionButton = ({title}) => {
  return (
    <div className="btn-wrapper">
      <button className="cta-btn">{title}</button>
    </div>
  )
};

export default CallToActionButton;
