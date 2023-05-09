import React from "react";
import { NavLink } from "react-router-dom";

export default function Universals() {
  return (
    <div className="nav-bar bar-left">
      <div className="nav-bar-item">
        <NavLink
          to="language/languages"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Spoken Languages
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="language/slang"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Slang
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="language/symbols"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Symbols
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="language/gestures"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Gestures
        </NavLink>
      </div>
    </div>
  );
}
