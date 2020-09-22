import React, { useEffect, useReducer, useContext, useState } from "react";
import { UserContext } from "../../App";
import ChatList from "../chatbox/ChatList";
import ChatListBox from "../chatbox/ChatListBox";
import Gallery from "../gallery/Gallery";
import PostDetails from "../postDetails/PostDetails";
import Profile from "../profile/Profile";
import SideNav from "../sideNav/SideNav";
import ToDo from "../todo/ToDo";
import Chat from "../chatbox/Chat";

const handler = {
  profile: true,
  posts: false,
  gallery: false,
  todo: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "profile":
      return { profile: true, posts: false, gallery: false, todo: false };
    case "posts":
      return {
        profile: false,
        posts: true,
        gallery: false,
        todo: false,
      };
    case "gallery":
      return { profile: false, posts: false, gallery: true, todo: false };
    case "todo":
      return {
        profile: false,
        posts: false,
        gallery: false,
        todo: true,
      };
    default:
      return state;
  }
};

export const HandlerContext = React.createContext();

function DashBoard() {
  const userContext = useContext(UserContext);
  const [handlerState, dispatchHnadler] = useReducer(reducer, handler);
  const [chat, setChat] = useState({});
  const [showChat,setShowChat]=useState(false);

  useEffect(() => {
    return () => {
      userContext.usedispatch({ type: "signOutUser" });
    };
    
  }, []);

  const addChat = (person) => {
    setChat(person);
    setShowChat(true);
  }

  const removeChat = ()=>{
      setShowChat(false);
  }

  return (
    <HandlerContext.Provider
      value={{ usehandler: handlerState, handlerdispatch: dispatchHnadler }}
    >
      <div className="main-body">
        <SideNav />
        {handlerState.profile ? <Profile /> : null}
        {handlerState.posts ? <PostDetails /> : null}
        {handlerState.gallery ? <Gallery /> : null}
        {handlerState.todo ? <ToDo /> : null}
        <ChatList heading="Chats">
            <ChatListBox addChat={addChat}/>
        </ChatList>
        {
         showChat && <Chat  person={chat} removeChat={removeChat}></Chat>
        }
      </div>
    </HandlerContext.Provider>
  );
}

export default DashBoard;
