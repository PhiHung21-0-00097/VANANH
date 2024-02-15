import React, { Component } from "react";

import Slider from "./Slider";
import Partner from "./Partner";
import Introduce from "./Introduce";
import Service from "./Service";

import Producet from "./Product";
import News from "./News";
import MenuBar from "./MenuBar";

import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Slider />
        <Introduce />
        <Service />
        <Producet />
        <Partner />
        <News />
      </>
    );
  }
}
export default Home;
