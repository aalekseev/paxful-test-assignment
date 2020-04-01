import React from 'react';
import './Stats.scss';

import UserAvatar from "../misc/UserAvatar";
import CallToActionButton from "../misc/CallToActionButton";
import Reputation from "../misc/Reputation";
import TradeStatus from "../misc/TradeStatus";

const StatBlock = ({header, value}) => {
  const headerEl = typeof header === 'string' ? (<h4>{header}</h4>) : header;
  const valueEl = typeof value === 'string' ? (<p>{value}</p>) : value;
  return (
    <div className="block">
      {headerEl}
      {valueEl}
    </div>
  )
};

const Stats = ({trade}) => {
  return (
    <aside className="right-sidebar">
      <div className="stats-header">
        <p>You are trading with <span className="bold">{trade.seller.name}</span></p>
        <p>Started 23 minutes ago</p>
      </div>
      <CallToActionButton title="Release bitcoins" />
      <div className="stats">
        <StatBlock header={<UserAvatar src={trade.seller.img_url} />} value={<Reputation user={trade.seller} />} />
        <StatBlock header="# OF TRADES" value="4" />
        <StatBlock header="TRADE STATUS" value={<TradeStatus status={trade.status} />} />
        <StatBlock header="TRADE HASH" value={trade.hash.slice(0, 8)} />
        <StatBlock header="AMOUNT USD" value={trade.amount_usd} />
        <StatBlock header="AMOUNT BTC" value={trade.amount_btc} />
      </div>
    </aside>
  );
};

export default Stats;
