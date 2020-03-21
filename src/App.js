import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Timer from "./Components/Timer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <div class="container h-100 d-flex justify-content-center">
          <div class="jumbotron d-flex text-center text-white bg-dark">
            <ToastContainer />
            <Timer duration="45" title="pomodoro" />
            <hr />
          </div>
        </div>

        <div class="container h-100 d-flex  justify-content-center">
          <div class="jumbotron d-flex text-center text-white bg-dark ">
            <Timer duration="5" title="courte pause" />
            <hr />
          </div>
        </div>

        <div class="container h-100 d-flex justify-content-center">
          <div class="jumbotron d-flex text-center text-white bg-dark">
            <Timer duration="10" title="longue pause" />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
