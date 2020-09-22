import React, { useContext } from "react";
import { UserContext } from "../../App";
import TableInfo from "./TableInfo";

function InformationSection() {
  const userContext = useContext(UserContext);
  return (
    <div className="info-main-div">
      <div className="personal-info-div">
        <span className="span-img-info-profile">
        <img
          className="img-info-profile"
          src={userContext.usestate.user.profilepicture}
        />
        </span>
        <div className="name-span">{userContext.usestate.user.name}</div>
        <div className="table-div">
          <TableInfo
            cell1="Username :"
            cell2={userContext.usestate.user.username}
          />
          <TableInfo cell1="e-mail :" cell2={userContext.usestate.user.email} />
          <TableInfo cell1="Phone :" cell2={userContext.usestate.user.phone} />
          <TableInfo
            cell1="Website :"
            cell2={userContext.usestate.user.website}
          />
        </div>
      </div>
      <div className="company-info-div">
        <div className="company-name-span">Company</div>
        <div className="table-div">
          <TableInfo
            cell1="Name :"
            cell2={userContext.usestate.user.company.name}
          />
          <TableInfo
            cell1="catchphrase :"
            cell2={userContext.usestate.user.company.catchPhrase}
          />
          <TableInfo
            cell1="bs :"
            cell2={userContext.usestate.user.company.bs}
          />
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
