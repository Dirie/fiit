import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar3";
import "./App.css";
import notfound from "./components/notfound";
import login from "./components/login";
// import Home from "./components/menus_home/home";
import Corousels from "./components/corousel";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/" component={Corousels} />
          {/* <Route path="/logout" component={Logout} /> */}

          <Route path="/not-found" component={notfound} />
          {/* <Redirect from="/" exact to="/notfound" /> */}
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
