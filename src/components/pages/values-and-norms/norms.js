import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/norms.jpg";

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
          <h1>Norms and Sanctions</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>Norms and Sanctions</p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
