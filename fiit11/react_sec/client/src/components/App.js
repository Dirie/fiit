import React from "react";
import News from "./news/news";
import "./App.css";
import SideNews from "./news/Sidenews";

function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighter-4">
            <a href="#" className="bran-logo center">
              my feed
            </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News />
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <SideNews />
        </div>
      </div>
    </div>
  );
}

export default App;
