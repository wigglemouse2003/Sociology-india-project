import React, { Component } from "react";
// not done
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
          <h1>Healing Practices</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>Healing Practices</p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
