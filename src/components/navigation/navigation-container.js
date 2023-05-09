import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IntroContent from "../pages/intro/intro";
import MaterialContent from "../pages/material/material";
import NonmaterialContent from "../pages/nonmaterial/nonmaterial";
import UniversalContent from "../pages/universals/universals";
import LanguageContent from "../pages/language/language";
import ValuesContent from "../pages/values-and-norms/values-and-norms";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const NavigationComponent = (props) => {
  // State
  const [introActive, changeIntro] = useState(false);
  const [materialActive, changeMaterial] = useState(false);
  const [nonmaterialActive, changeNonmaterial] = useState(false);
  const [universalsActive, changeUniversals] = useState(false);
  const [languageActive, changeLanguage] = useState(false);
  const [valuesActive, changeValues] = useState(false);
  const setActive = (activeLink) => {
    changeIntro(false);
    changeMaterial(false);
    changeNonmaterial(false);
    changeUniversals(false);
    changeLanguage(false);
    changeValues(false);
    if (activeLink == "universals") {
      changeUniversals(!universalsActive);
    } else if (activeLink == "nonmaterial") {
      changeNonmaterial(!nonmaterialActive);
    } else if (activeLink == "intro") {
      changeIntro(!introActive);
    } else if (activeLink == "material") {
      changeMaterial(!materialActive);
    } else if (activeLink == "language") {
      changeLanguage(!languageActive);
    } else if (activeLink == "values") {
      changeValues(!valuesActive);
    }
  };

  return (
    <div className="nav-wrapper-background">
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink
              end
              onClick={() => setActive("none")}
              to="/"
              className={({ isActive }) => (isActive ? "nav-link-active" : "")}
            >
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("intro")}
              className={
                introActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Introduction
              {introActive ? <IntroContent /> : null}
            </div>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("material")}
              className={
                materialActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Material Culture
              {materialActive ? <MaterialContent /> : null}
            </div>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("nonmaterial")}
              className={
                nonmaterialActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Nonmaterial Culture
              {nonmaterialActive ? <NonmaterialContent /> : null}
            </div>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("universals")}
              className={
                universalsActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Cultural Universals
              {universalsActive ? <UniversalContent /> : null}
            </div>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("language")}
              className={
                languageActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Language Culture
              {languageActive ? <LanguageContent /> : null}
            </div>
          </div>

          <div className="nav-link-wrapper">
            <div
              onClick={() => setActive("values")}
              className={
                valuesActive
                  ? "nav-link-active nav-bar-active nav_bar_item"
                  : "nav-link"
              }
            >
              Indian Norms
              {valuesActive ? <ValuesContent /> : null}
            </div>
          </div>
        </div>

        <div className="right-side">
          <p>PHILLIP WOOLF</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
