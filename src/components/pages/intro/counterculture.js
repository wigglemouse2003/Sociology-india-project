import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/countercultures.jpg";

export default class AverageFamily extends Component {
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
          <h1>Countercultures</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>Countercultures</p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
