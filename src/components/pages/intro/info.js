import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/Welcome-To-India-Sign.jpg";

export default class BasicInfo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="page-container">
        <div
          className="page-background-img"
          style={{
            background: "url(" + backgroundImg + ") no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1>Basic Information About India</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <ul>
            <li>The population is currently 1.4 billion people.</li>
            <li>The net worth is around 3.18 trillion US Dollars.</li>
            <li>The total area is 1.269 million square miles.</li>
          </ul>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
