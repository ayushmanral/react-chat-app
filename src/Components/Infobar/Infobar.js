import React from 'react';
import './Infobar.css';

const Infobar = ({ room }) => {
    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">&times;</a>
            </div>
        </div>
    )
}

export default Infobar;