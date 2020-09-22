import React, { useContext } from "react";
import { UserContext } from "../../App";

function ChatListBox(props) {
  const userContext = useContext(UserContext);
  const personList = [...userContext.usestate.users];
  const index = userContext.usestate.users.findIndex(
    (person) => person.id === userContext.usestate.user.id
  );
  personList.splice(index, 1);
  const openChatBox = (e,person) => {
    e.preventDefault();
    props.addChat(person);
  };
  return (
 
    
    //   <div className="chat-list-div">
        <ul className="ul-modal">
          {personList.map((user) => (
            <li key={user.id}
              className="li-modal"
              onClick={(e) => {
                openChatBox(e,user);
              }}
            >
              <img alt="" className="img-home" src={user.profilepicture} />
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
