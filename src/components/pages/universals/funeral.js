import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/funeral.jpg";

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
          <h1>Funerals</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>Funerals</p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
