import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import SideNav from "./components/sideNav/SideNav";
import PostDetails from "./components/postDetails/PostDetails";
import Gallery from "./components/gallery/Gallery";
import ToDo from "./components/todo/ToDo";
import ChatList from "./components/chatbox/ChatList";
import DashBoard from "./components/dashboard/DashBoard";

export const UserContext = React.createContext();

const initialState = {
  users: [],
  errorMsg: false,
  user: {},
  userLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, users: action.value };
    case "setErrorMsg":
      return { ...state, errorMsg: action.value };
    case "setLoginUser":
      return { ...state, user: action.value, userLogin: true };
      case "signOutUser":
        return { ...state, user: {}, userLogin: false };
    default:
      return state;
  }
};

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        dispatch({ type: "setUser", value: res.data.users });
      })
      .catch(() => {
        dispatch({ type: "setErrorMsg", value: true });
      });
  }, []);
  


  if (state.errorMsg) {
    return <div>something went wrong</div>;
  } else {
    return state.users.length !== 0 ? (
      <UserContext.Provider value={{ usestate: state, usedispatch: dispatch }}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact render={() =>
                  state.userLogin ? <DashBoard /> : <Redirect to="/" />
                }/>
          
        </BrowserRouter>
      </UserContext.Provider>
    ) : (
      <div>loading....</div>
    );
  }
}

export default App;
