import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/posts";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavBar />
      </header>
      <section>
        <Posts />
      </section>
    </div>
  );
}

export default App;
