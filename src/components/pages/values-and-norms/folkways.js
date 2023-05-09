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
          <h1>Indian Folkways</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            Indians try to be on time all the time, so much so that some of them
            will put the times of events 10-15 minutes earlier than the actual
            event in their calendars so they can make sure they are not even 1
            minute late. They also tend to take off their shoes whenever
            entering a persons house because they believe that feet are dirty
            and disgusting. And if you are in India, make sure that you don't
            take prices at face value. In India bargaining is very common and
            prices are not typically set in stone.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
