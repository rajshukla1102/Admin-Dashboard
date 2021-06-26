import React from "react";

import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import "./Sidebar.css";
import { IconContext } from "react-icons";


export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
         
          <nav className="nav-menu">
            <ul className="nav-menu-items">
              <li className="navbar-toggle" >
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={() => closeSidebar()} />
                </Link>
              </li>
              
              <div className="menu-links">
               
                {SidebarData.map((items, ind) => {
                  return (
                    <li key={ind} className={items.cname}>
                      <Link to={items.path}>
                        {items.icon}
                        {/* <span>{items.title}</span> */}
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};
