import React from "react";
import { NavLink } from "react-router-dom";

export default function Universals() {
  return (
    <div className="nav-bar bar-left">
      <div className="nav-bar-item">
        <NavLink
          to="universals/birth"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Birthing customs
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="universals/coming-of-age"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Coming of age traditions
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="universals/marriage"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Marriage Ceremonies
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="universals/funeral"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Funeral Customs
        </NavLink>
      </div>
    </div>
  );
}
