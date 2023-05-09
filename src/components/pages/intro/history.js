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
          <h1>A Brief History of India</h1>
        </div>

        <div className="content">
          <div className="left"></div>
          <p>
            During the 16th and 17th centuries there were a few powers trying to
            take a central hold on India however in the late 18th century, the
            British finally won as the dominant power. During their ruling of
            India, the Brits had brought about changes in the the social,
            political, and economic life. However the native Indians had finally
            had enough and in the first World War, the chaos of war brought the
            Indians an opportunity to revolt and in the end, India got its well
            deserved freedom from the British.
          </p>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
