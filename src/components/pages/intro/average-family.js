import React, { Component } from "react";
import backgroundImg from "../../../../static/assets/images/intro/average-family.jpg";

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
          <h1>Average Family Snapshot</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            In India, most households contain 3-4 generations living in the same
            house. There is an average of 4.4 people per house. Indians used to
            have many children per household however in the recent decades the
            fertility rate in India has decreased dramatically, down to around 2
            kids per house.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
