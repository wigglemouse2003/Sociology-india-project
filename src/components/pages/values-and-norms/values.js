import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/history.jpg";

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
          <h1>
            Some of the values found in Indian culture are, respect for elders,
            family unity, and belief in karma.
          </h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>Values</p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
