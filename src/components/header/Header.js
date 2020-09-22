import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import {Link} from 'react-router-dom';
import { HandlerContext } from "../dashboard/DashBoard";

function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const userContext = useContext(UserContext);
  const handlerContext = useContext(HandlerContext);
  // const [ userList,setUserList]=useState([]);
  // useEffect(()=>{
  //   let tempuserList=[...userContext.usestate.users];
  //   let index = tempuserList.findIndex((user)=>user.id===userContext.usestate.user.id);
  //   tempuserList.splice(index,1);
  //   setUserList(tempuserList);
    
  // },[]);
  
  const showModalHandler = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  
  return (
    <div className="main-header-div">
      <span className="header-name-span">{props.headerName}</span>
      <span onClick={showModalHandler} className="main-span-header">
        <img alt=""
          className="img-header"
          src={userContext.usestate.user.profilepicture}
        />
        <span className="span-header">{userContext.usestate.user.name}</span>
      </span>
      {showModal ? (
        <>
          <div className="blur_div" onClick={showModalHandler}></div>
          <div className="modal-main-div">
            <div className="modal-user-div">
              <span className="span-img-modal">
              <img alt=""
                className="img-modal"
                src={userContext.usestate.user.profilepicture}
              />
              </span>
              <div>{userContext.usestate.user.name}</div>
              <div style={{color:"gray",}}>{userContext.usestate.user.username}</div>
            </div>
            <div className="modal-user-list">
              <ul className="ul-modal">
                {userContext.usestate.users.map((user)=><Link key={user.id} to="/dashboard">
              <li className="li-modal"
                onClick={() =>{
                  userContext.usedispatch({ type: "setLoginUser", value: user });
                  handlerContext.handlerdispatch({ type: "profile" });
                }
                }
              >
                <img alt="" className="img-home" src={user.profilepicture} />
                <span className="span-home">{user.name}</span>
              </li>
            </Link>)}
              </ul>
            </div>
            <div>
              <Link to="/">
              <button onClick={() =>
                  userContext.usedispatch({ type: "signOutUser" })
                } className="sign-out-button">Sign Out</button>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Header;
