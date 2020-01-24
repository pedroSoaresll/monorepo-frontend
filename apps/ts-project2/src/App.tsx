import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@project-ui/button";
import Input from "@project-ui/input";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Input />
        <Button>Ola mundo</Button>
      </header>
    </div>
  );
};

export default App;
