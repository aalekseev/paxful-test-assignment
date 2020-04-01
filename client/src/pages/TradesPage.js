import React, {Fragment, useState} from 'react';

import avatar from "../static/avatar.jpg";

import TradeList from "../trades/TradeList";
import TradeCard from "../trades/components/TradeCard";

import ChatBody from "../ui/Chat/ChatBody";
import ChatHeader from "../ui/Chat/ChatHeader";
import Message from "../ui/Chat/Message";
import MessageInput from "../ui/Chat/MessageInput";
import StatsGrid from "../ui/Stats/StatsGrid";

const TradesPage = ({trades}) => {
  const [currentTrade, setCurrentTrade] = useState(trades[1]);
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
  return (
    <Fragment>
      <TradeList>
        {trades.map(trade => (
          <TradeCard
            key={trade.hash}
            trade={trade}
            onClick={() => setCurrentTrade(trade)}
            selected={currentTrade.hash === trade.hash}
          />))}
      </TradeList>
      <ChatBody>
        <ChatHeader trade={currentTrade} />
        {messages.map(message => <Message key={message.text} {...message} />)}
        <MessageInput placeholder="Type your message..." />
      </ChatBody>
      <StatsGrid trade={currentTrade} />
    </Fragment>
  );
};

export default TradesPage;
