import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Chaticon from "./../../icons8-chat-room-24.png";
import DropUp from "./../../icons8-chevron-up-24.png";

function ChatListBox(props) {
  const userContext = useContext(UserContext);
  const personList = [...userContext.usestate.users];
  const index = userContext.usestate.users.findIndex(
    (person) => person.id === userContext.usestate.user.id
  );
  personList.splice(index, 1);
  console.log(personList);
  const [chatPerson, setChatperson] = useState({});
  const [showChat,setShowChat]=useState(false);
  const openChatBox = (e,person) => {
    e.preventDefault()
    setChatperson(person);
    setShowChat(true);
    props.addChat(person)
    console.log(person);
  };
  return (
 
    
    //   <div className="chat-list-div">
        <ul className="ul-modal">
          {personList.map((user) => (
            <li
              className="li-modal"
              onClick={(e) => {
                openChatBox(e,user);
              }}
            >
              <img className="img-home" src={user.profilepicture} />
              <span className="span-list">{user.name}</span>
            </li>
          ))}
        </ul>
    //   </div>
    
    // {showChat&&<div className="chatbox"></div>}
    
    // </>
  );
}

export default ChatListBox;
