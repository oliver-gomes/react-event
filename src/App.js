import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalComponent from "./components/Modal";
import Description from "./components/Description";
import Location from "./components/Location";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ModalComponent />
        <Description />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
