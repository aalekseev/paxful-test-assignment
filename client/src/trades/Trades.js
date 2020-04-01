import React from 'react';
import './Trades.scss';

const Trades = ({children}) => {
  return (
    <aside className="left-sidebar">
      {children}
    </aside>
  )
};

export default Trades;
