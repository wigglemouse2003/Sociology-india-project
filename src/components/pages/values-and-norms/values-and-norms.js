import React from "react";
import { NavLink } from "react-router-dom";

export default function ValuesAndNorms() {
  return (
    <div className="nav-bar bar-left">
      <div className="nav-bar-item">
        <NavLink
          to="values/values"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Values
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="values/proverbs"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Proverbs
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="values/norms"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Norms
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="values/folkways"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Folkways
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="values/mores"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Mores
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="values/taboos"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Taboos
        </NavLink>
      </div>
    </div>
  );
}
