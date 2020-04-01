import React, {Fragment, useState, useEffect} from 'react';

import avatar from './static/avatar.jpg';

import {TopNav, TopNavLink} from "./navigation/TopNav";
import {PageNav, PageNavLink} from "./navigation/PageNav";

import Trades from "./trades/Trades";
import TradeCard from "./trades/TradeCard";
import ChatBody from "./chat/ChatBody";
import ChatHeader from "./chat/ChatHeader";
import Message from "./chat/Message";
import MessageInput from "./chat/MessageInput";
import Stats from "./stats/Stats";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trades, setTrades] = useState([]);
  const [currentTrade, setCurrentTrade] = useState({});

  const fetchTrades = () => {
    fetch('http://localhost:8000/api/data', {credentials: 'same-origin'})
      .then(res => res.json())
      .then(data => {
        setTrades(data.trades);
        setCurrentTrade(data.trades[0]);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchTrades, []);

  const messages = [
    {
      messageType: 'question',
      user: {img_url: avatar},
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend nibh magna, vitae imperdiet lacus pellentesque sit amet.',
      time: '12:00pm'
    },
    {
      messageType: 'reply',
      user: {img_url: avatar},
      text: 'Etiam rutrum tristique ipsum, eu eleifend tortor sodales vel. Quisque tellus velit, tristique ac pharetra a, interdum at leo. Cras interdum malesuada euismod. Integer id turpis ac urna faucibus sodales vitae sed turpis. Mauris enim sapien, interdum sit amet eros vel, rhoncus euismod metus. Quisque id sollicitudin ligula, et tempus augue.',
      time: '11:00pm'
    }, {
      messageType: 'reply',
      user: {img_url: avatar},
      text: 'Etiam luctus ex nibh, et euismod nisl ullamcorper ut. Aliquam non luctus orci. Pellentesque pulvinar augue neque, eget fermentum urna volutpat sodales. Nulla aliquam metus sed nunc scelerisque, a tincidunt lacus bibendum. Mauris at tristique nisi, at interdum elit. Suspendisse dapibus ex vitae eros dignissim, a posuere risus pretium. Morbi id condimentum diam. Maecenas vel leo nec massa faucibus vulputate. Fusce at cursus metus.',
      time: '14:00pm'
    },
  ];

  if (error) {
    return (<p>{error.message}</p>)
  }
  if (loading) {
    return (<p>Loading...</p>);
  }
  return (
    <Fragment>
      <TopNav>
        <TopNavLink title="Buy bitcoins" />
        <TopNavLink title="Sell bitcoins" active={true} />
        <TopNavLink title="Wallet" />
        <TopNavLink title="Support" />
        <TopNavLink title="Your account" />
      </TopNav>
      <PageNav>
        <PageNavLink title="Overview" />
        <PageNavLink title="Trades" active={true} />
        <PageNavLink title="Disputes" />
        <PageNavLink title="Your offers" />
        <PageNavLink title="My team" />
        <PageNavLink title="Trade History" />
      </PageNav>
      <div className="container">
        <Trades>
          {trades.map(trade => (
            <TradeCard
              key={trade.hash}
              trade={trade}
              onClick={() => setCurrentTrade(trade)}
              selected={currentTrade.hash === trade.hash}
            />))}
        </Trades>
        <ChatBody>
          <ChatHeader trade={currentTrade} />
          {messages.map(message => <Message key={message.text} {...message} />)}
          <MessageInput placeholder="Type your message..." />
        </ChatBody>
        <Stats trade={currentTrade} />
      </div>
    </Fragment>
  );
}

export default App;
