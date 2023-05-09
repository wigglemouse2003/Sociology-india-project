import React from "react";
import { NavLink } from "react-router-dom";

export default function Nonmaterial() {
  return (
    <div className="nav-bar bar-right">
      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/music"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Music
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/recreation"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Recreational activities
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/healing"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Healing practices
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/etiquette"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Etiquette
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/religions"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Religions
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/nonmaterial/education"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Educational System
        </NavLink>
      </div>
    </div>
  );
}
