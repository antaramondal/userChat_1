import React ,{useState}from 'react';
import DropDown from './../../icons8-expand-arrow-50.png'
import Cross from './../../icons8-multiply-30.png'



function Chat(props) {
    const [openChat, setOpenChat] = useState(false)
    
    return (
        <div className="chat-person-container" style={{height: openChat ? '6cm' : ''}}>
            <div className="chat-list" >
                <img className="img-chat-person" src={props.person.profilepicture} alt=""/>
                <span>{props.person.name}</span>
                <img alt="" src={DropDown} style={{ transform: openChat && 'rotate(180deg)'}} onClick={() => {setOpenChat(!openChat)}}/>
                <img alt="" src={Cross} onClick={() => {props.removeChat()}} />
            </div>
            {
                <div className="chat-body" style={{display: openChat ? 'flex' : 'none'}}>
                    <div></div>
                </div>
            }
        </div>
    )
}

export default Chat
