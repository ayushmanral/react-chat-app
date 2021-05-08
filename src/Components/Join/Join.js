import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="iconHolder">
                    <span className="horizontalLineElement"></span>
                    <span className="circleElement"></span>
                    <span className="horizontalLineElement"></span>
                </div>
                <div className="mt-20"><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={ event => (!name || !room)? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                  <button className="button mt-50" type="submit">Join</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;