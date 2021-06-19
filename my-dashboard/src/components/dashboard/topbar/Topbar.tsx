import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./topbar.css";
import HeaderOption from "./HeaderOption";



const Topbar: React.FC = () => {

    const logoutOfApp = () => {
        console.log("logout clicked");
      }

  return (
    <React.Fragment>
      <div className="header">
        <div className="header__left">
          <img
            src=""
            alt="logoss"
          />
          <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
