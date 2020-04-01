import React from 'react';
import './TradeCard.scss';

import UserAvatar from "../../../ui/UserAvatar";
import TradeStatus from "../TradeSatus";

const StatusDot = ({online}) => {
  return (
    <div className="status">
      <div className={`${online ? "online" : "offline"} dot`}></div>
    </div>
  )
};

const TradeCard = ({trade, selected, onClick}) => {
  return (
    <div className={`trade-card ${selected && "selected"}`} onClick={onClick}>
      <div className="trade-card-wrapper">
        <StatusDot online={trade.seller.online}/>
        <div className="info">
          <p>{trade.seller.name} <span>is buying</span></p>
          <h3>{trade.title}</h3>
          <small>{trade.amount_usd} USD ({trade.amount_btc} BTC)</small>
        </div>
      </div>
      <div className="user">
        <UserAvatar src={trade.seller.img_url} />
        <TradeStatus status={trade.status} />
      </div>
    </div>
  )
};

export default TradeCard;
