import React, { Component } from "react";
import homepageBackgroundPicture from "../../../static/assets/images/home/india-background.jpg";

export default class HomepageContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="homepage-wrapper"
        style={{
          background: "url(" + homepageBackgroundPicture + ") no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="homepage">
          <div className="home-block">
            <h1>Welcome to India</h1>
          </div>
          <div className="welcome-text">
            <p>
              This is the place for all you need to know about India and it's
              culture.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
