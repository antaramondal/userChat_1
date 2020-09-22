import React, { useContext } from "react";
import { UserContext } from "../../App";
import TableInfo from "./TableInfo";

function AddressSection() {
  const userContext = useContext(UserContext);
  return (
    <div className="address-main-div">
      <div className="address-info-div">
        <div className="address-name-span">Address</div>
        <div className="address-table-div">
        <TableInfo cell1="Street :" cell2={userContext.usestate.user.address.street} />
        <TableInfo cell1="Suite :" cell2={userContext.usestate.user.address.suite} /> 
        <TableInfo cell1="City :" cell2={userContext.usestate.user.address.city} />  
        <TableInfo cell1="Zipcode :" cell2={userContext.usestate.user.address.zipcode} />  
          
        </div>
      </div>
      <div className="iframe-div">
        <iframe
          src={`https://maps.google.com/maps?q=35.856737, 10.606619&hl=es;z=14&output=embed`}
          className="iframe-map"
        ></iframe>
      </div>
      <div className="lat-lng-div">
        <span style={{color: "gray",}}>Lat:</span>
        <span style={{margin:" 0 20px 0px 5px",
    fontWeight: "bolder"}}>{userContext.usestate.user.address.geo.lat}</span>
        <span style={{color: "gray",}}>Long:</span>
        <span style={{margin:" 0 20px 0px 5px",
    fontWeight: "bolder"}}>{userContext.usestate.user.address.geo.lng}</span>
      </div>
    </div>
  );
}

export default AddressSection;
