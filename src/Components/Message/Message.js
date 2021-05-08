import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundUsers">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
      : ( user === "admin" ) ? (
            <div className="adminMessage">
              <p className="adminMessageText">{ReactEmoji.emojify(text)}</p>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
              <div className="messageBox backgroundLight ml-10">
                <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
              </div>
              <p className="sentText">{user}</p>
            </div>
      )    
      
  );
}

export default Message;