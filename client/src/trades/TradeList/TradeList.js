import React from 'react';
import './TradeList.scss';

const TradeList = ({children}) => {
  return (
    <aside className="left-sidebar">
      {children}
    </aside>
  )
};

export default TradeList;
