import React from 'react';
import './TradeStatus.scss';

const TradeStatus = ({status}) => {
  const isPaid = status === 'PAID';
  return (
    <div className={`trade-status ${isPaid && "paid"}`}>
      {status}
    </div>
  )
};

export default TradeStatus;
