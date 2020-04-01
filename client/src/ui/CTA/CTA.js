import React from 'react';
import './CTA.scss';

const CTA = ({title}) => {
  return (
    <div className="btn-wrapper">
      <button className="cta-btn">{title}</button>
    </div>
  )
};

export default CTA;
