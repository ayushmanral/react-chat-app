import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import RoomContestents from '../RoomContestents/RoomContestents';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [usersName, setUsersName] = useState([]);
    const ENDPOINT = 'https://react-socketio-backend.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket= io(ENDPOINT);
        
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ()=>{});

        return() => {
            socket.emit('disconnect');
            socket.off( );
        }
    }, [ENDPOINT, location.search]);

    useEffect( ()=>{
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    
    useEffect(() => {
        socket.on('roomData', ({room, users}) => {
            setUsersName([users]);
        })
    },[usersName]);

    return(
        <div className="outerContainer">
            <div className="container">
                <Infobar room={room}/>
                <RoomContestents usersName={usersName} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;