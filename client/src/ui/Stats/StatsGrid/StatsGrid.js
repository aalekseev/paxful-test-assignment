import React from 'react';
import './StatsGrid.scss';

import UserAvatar from "../../UserAvatar";
import CTA from "../../CTA";
import Reputation from "../../Reputation";
import TradeStatus from "../../../trades/components/TradeSatus";
import StatBlock from "../StatBlock";

const StatsGrid = ({trade}) => {
  return (
    <aside className="right-sidebar">
      <div className="stats-header">
        <p>You are trading with <span className="bold">{trade.seller.name}</span></p>
        <p>Started 23 minutes ago</p>
      </div>
      <CTA title="Release bitcoins" />
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

export default StatsGrid;
