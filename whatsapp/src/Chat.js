import React,{useState,useEffect} from 'react'
import './Chat.css'
import {Avatar} from '@material-ui/core'
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic'
import { IconButton } from '@material-ui/core';
import db from './db'
import { useParams } from "react-router-dom";


export default function Chat() {

  const [input, setInput] = useState('')
  const {roomId} = useParams()
  const {home} = useParams()
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState([])
  // const newMessages = []
  
  
  useEffect(() => {
    if (roomId) {
      // console.log(roomId);
      const item = db.find(item => item.id === roomId)
      setRoomName(item.name)
      setMessages(item.message)
      
      // console.log(item.message);
    }
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault()
    const newMessages = [...messages]
    newMessages.push({message : input});
    setMessages(newMessages);
    console.log(messages);
    setInput('')
  }
    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>{roomName}</h3>
            <p>last seen tuesday 4</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat__body">
          {messages.map((item) => (
            <p className={`chat__message ${true && "chat__reciever"}`}>
              <span className="chat__name">Milad</span>
              <p key={item.id}>{item.message}</p>
            </p>
          ))}
          {/* {newMessages.forEach(item => (
            <p className={`chat__message ${true && "chat__reciever"}`}>
              <span className="chat__name">Milad</span>
              <p key={Math.random()}>{item}</p>
            </p>
          ))} */}
        </div>
        <div className="chat__footer">
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
            {(input.length > 0) && <SendIcon />}
            {(input.length===0) && <MicIcon />}
          </form>
        </div>
      </div>
    );
}
