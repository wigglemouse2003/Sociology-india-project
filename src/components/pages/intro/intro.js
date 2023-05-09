import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div className="nav-bar bar-right">
      <div className="nav-bar-item">
        <NavLink
          to="/intro/history"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          History
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/intro/info"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Basic Information
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/intro/average-family"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Average Family
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/intro/subcultures"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Subcultures
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/intro/countercultures"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Countercultures
        </NavLink>
      </div>
    </div>
  );
}
