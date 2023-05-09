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
          <h1>Technology</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            While some Indians live a more traditional and 3rd world-esque
            lifesyle, India is actually quite a technologically advanced
            country. Most of the population has internet access and working
            plumbing. The most technologically advanced city in India is Mumbai.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
