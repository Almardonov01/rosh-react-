import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Footer from "./companents/Footer/Footer";
import MainPage from "./companents/MainPage/MainPage";
import ManuPage from "./companents/MenuPage/ManuPage";
import Navigation from "./companents/Navigation/Navigation";

const App = () => {
  return (
    <div className="main_container">
      <Navigation />
      <Router>
        <MainPage path="/" />
        <ManuPage path="Menu" />
      </Router>
      <Footer />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
