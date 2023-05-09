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
          <h1>Indian Taboos</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            In India, there are some actions that are considered taboo. Some of
            these actions are, pointing the bottom of your feet at religious
            altars, giving money to begging women or children, and pointing at
            people or things with your index finger. Doing these things will at
            best just get you some nasty stares and at worst get a crowd of
            angry people swarming you.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
