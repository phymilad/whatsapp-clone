import React, { useState, useEffect } from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChats from './SidebarChats'
import db from './db'

export default function Sidebar() {

  const [rooms, setRooms] = useState([])
  const [searchSidebar, setSearchSidebar] = useState('');

  useEffect(() => {
    setRooms(
      db.map((item) => ({
        id: item.id,
        name: item.name,
      }))
    );
  }, [])

  function handleChange(e) {
    setSearchSidebar(e.target.value)
  }

    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <input className="" type="text" placeholder="search here" onChange={handleChange} />
          </div>
        </div>
        <div className="sidebar__chats">
          {rooms
            .filter(item => item.name.toLowerCase().includes(searchSidebar.toLowerCase()))
            .map(room => (
            <SidebarChats key={room.id} id={room.id} name={room.name} />
          ))}
        </div>
      </div>
    );
}
















