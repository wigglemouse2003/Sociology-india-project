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
          <h1>Proverbs</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          These are some Indian proverbs:
          <ul>
            <li>
              Remember, no one is stopping you from lighting a lamp in a dark
              night.
            </li>
            <li>A thief thinks everybody steals.</li>
            <li>Pull someone by the ears and his head will follow.</li>
          </ul>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
