import React, {useState} from "react";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Navbar } from "./component/navabr/Navbar";
import  Main  from "./component/main/Main";
import { Sidebar } from "./component/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Products from "./pages/Products";

export const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <>
      <div className="container">
        <Router>
          <Sidebar  sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Switch>
            {/* <Route path='/' exact component={Home}/> */}
            <Route path="/products" component={Products} />
            {/* <Route path="/reports" component={Report} /> */}
          </Switch>
        </Router>
        <Main />
      </div>
    </>
  );
};
