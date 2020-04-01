import React, {Fragment} from 'react';
import './Message.scss';

import UserAvatar from "../misc/UserAvatar";

const Message = ({messageType, text, user, time}) => {
  return (
    <Fragment>
      <div className={`${messageType} message`}>
        <div></div>
        <div className="message-content">
          <p>{text}</p>
        </div>
        <UserAvatar src={user.img_url} />
      </div>
      <div className="timestamp">
        <small>{time}</small>
        <span />
      </div>
    </Fragment>
  )
};

export default Message;
