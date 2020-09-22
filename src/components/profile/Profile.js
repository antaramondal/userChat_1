import React from "react";
import Header from "../header/Header";
import AddressSection from "./AddressSection";
import InformationSection from "./InformationSection";

function Profile() {
  
  return (
    <div className="body-div">
        <Header headerName="Profile"/>
        <div className="profile-main-body">
        <InformationSection/>
        <AddressSection/>
        </div>
    </div>
  );
}

export default Profile;
