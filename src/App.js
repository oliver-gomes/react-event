import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalComponent from "./components/Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ModalComponent />
      </div>
    );
  }
}

export default App;
