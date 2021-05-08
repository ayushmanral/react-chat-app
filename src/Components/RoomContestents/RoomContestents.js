import React, { useEffect } from 'react';
import './RoomContestents.css';

const RoomContestents = ({usersName}) => {    
    let userCount = 0;
    if(usersName.length){
      userCount = usersName[0].length; 
    }

    useEffect(() => {
        const rosterBlock = document.querySelector('.rosterComponent');
        document.querySelector('.rosterTrigger p').addEventListener('click', function(){
          rosterBlock.classList.toggle("openRoster");
        })
        return () => {
            rosterBlock.classList.remove("openRoster");
        }
    }, [])

    return(        
        <div className="rosterComponent">
          <div className="rosterContainer">
            {
              usersName.map((name,index) =>
                <div className="rosterWrapper" key={index}>
                    { name.map((username, subindex) => <p key={subindex}>{username.name}</p>) }
                 </div>
              )
            } 
            </div>
          <div className="rosterTrigger">
            <p>{userCount} Joined!</p>
          </div>
        </div>
        
    );
}

export default RoomContestents;