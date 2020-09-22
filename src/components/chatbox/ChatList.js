import React, { useState } from 'react';
import Chaticon from './../../icons8-chat-room-50.png';
import DropDown from './../../icons8-expand-arrow-50.png'

function ChatList(props) {

    const [openChat, setOpenChat] = useState(false)

    return (
        <div className="chat-container" style={{ height: openChat ? '9cm' : ''}}>
            <div className="chat-list" onClick={() => {setOpenChat(!openChat)}}>
                <img alt="" src={Chaticon}/>
                <span>{props.heading}</span>
                <img alt="" src={DropDown} style={{ transform: openChat && 'rotate(180deg)'}}/>
            </div>
            {
                <div className="chat-body" style={{display: openChat ? 'flex' : 'none'}}>
                    {props.children}
                </div>
            }
        </div>
    )
}

export default ChatList