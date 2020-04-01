import React from 'react';
import './ChatHeader.scss';
import remove from '../../../static/remove.svg';

import Reputation from "../../Reputation";

const RemoveBtn = () => {
  return (
    <button className="remove-btn">
      <img src={remove} alt="remove"/>
    </button>
  );
};

const ChatHeader = ({trade}) => {
  return (
    <div className="chat-header">
      <RemoveBtn />
      <h2 className="truncate">{trade.title}</h2>
      <p>{trade.seller.name} <Reputation user={trade.seller} /></p>
    </div>
  );
};

export default ChatHeader;
