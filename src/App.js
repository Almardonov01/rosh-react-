import React from "react";
import { render } from "react-dom";
import AnimationPizzaCont from "./companents/AnimationPizza/AnimationPizzaCont";
import BannerImage from "./companents/BannerImage/BannerImage";
import CenterInfo from "./companents/CenterInfo/CenterInfo";
import Events from "./companents/Events/Events";
import Navigation from "./companents/Navigation/Navigation";
import ScrollCar from "./companents/ScrollCar/ScrollCar";
import SpecialThingsMain from "./companents/SpecialThings/SpecialThingsMain";

const App = () => {
  return (
    <div className="main__container">
      <Navigation />
      <BannerImage />
      <ScrollCar />
      <SpecialThingsMain />
      <AnimationPizzaCont />
      <CenterInfo />
      <Events />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
