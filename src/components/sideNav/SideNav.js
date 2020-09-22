import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { HandlerContext } from "../dashboard/DashBoard";

function SideNav() {
  const handlerContext = useContext(HandlerContext);
  return (
    <div className="sidenav-div">
      <ul className="ul-sidenav">
        <li
          className={
            handlerContext.usehandler.profile
              ? "nav-button-active"
              : "nav-button"
          }
          onClick={() => handlerContext.handlerdispatch({ type: "profile" })}
        >
          Profile
        </li>

        <hr />

        <li
          className={
            handlerContext.usehandler.posts ? "nav-button-active" : "nav-button"
          }
          onClick={() => handlerContext.handlerdispatch({ type: "posts" })}
        >
          Posts
        </li>

        <hr />

        <li
          className={
            handlerContext.usehandler.gallery
              ? "nav-button-active"
              : "nav-button"
          }
          onClick={() => handlerContext.handlerdispatch({ type: "gallery" })}
        >
          Gallery
        </li>

        <hr />

        <li
          className={
            handlerContext.usehandler.todo ? "nav-button-active" : "nav-button"
          }
          onClick={() => handlerContext.handlerdispatch({ type: "todo" })}
        >
          ToDo
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
