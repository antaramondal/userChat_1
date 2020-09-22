import React, { useContext, useReducer } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";


function Home() {
  const userContext = useContext(UserContext);
  
  return (
    <div className="user-div-home">
      <div className="user-header-home">Select an account</div>
      <div className="user-list-home">
        <div className="ul-div-home">
          <ul className="ul-home">
            {userContext.usestate.users.map((user) => (
              <Link key={user.id} to="/dashboard">
                <li
                  className="li-home"
                  onClick={() =>
                    userContext.usedispatch({
                      type: "setLoginUser",
                      value: user,
                    })
                  }
                >
                  <img className="img-home" src={user.profilepicture} />
                  <span className="span-home">{user.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
