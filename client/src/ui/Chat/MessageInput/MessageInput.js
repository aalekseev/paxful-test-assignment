import React from 'react';
import './MessageInput.scss';

const MessageInput = ({placeholder}) => {
  return (
    <div className="message-input">
      <p>{placeholder}</p>
      <button>SEND</button>
    </div>
  )
};

export default MessageInput;
