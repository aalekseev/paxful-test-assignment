import React from 'react';
import './Reputation.scss';

const Reputation = ({user}) => {
  return (
    <span className="reputation">
      <span className="positive">+{user.reputation.positive}</span>/
      <span className="negative">-{user.reputation.negative}</span>
    </span>
  );
};

export default Reputation;
