import React from "react";
import "./Navbar.css";
import * as Icons from "react-icons/fa";
import "../../index.css";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";

export const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav_icon" style={openSidebar? {dispaly:'none'}:{display:'inline'}} >
          <Link to="#" onClick={() => openSidebar()}  >
            <Icons.FaBars />
          </Link>
        </div>
        <div className="navbar__right">
          <div className="icons">
            <a href="javascript:void(0);">
              <Icons.FaBell />
            </a>
          </div>

          <div className="profile_design">
            <span className="text-small">Rishabh</span>
            <a href="javascript:void(0);">
              <img width="30" src={avatar} alt="avatar" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
