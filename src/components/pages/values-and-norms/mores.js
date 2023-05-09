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
          <h1>Mores</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            When you are in India it is customary to bring some sort of small
            gift when you are invited into someones house. You should also make
            sure to wash your hands before dealing with food, including eating
            it. And you should always be sure to dress modestly especially when
            at a religious site.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
