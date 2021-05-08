import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
    return(
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={(event) => sendMessage(event)}><span className="sendArrow_big"></span><span className="sendArrow_small"></span></button>
        </form>
    )
}

export default Input;