import React from "react";
import { NavLink } from "react-router-dom";

export default function Material() {
  return (
    <div className="nav-bar bar-right">
      <div className="nav-bar-item">
        <NavLink
          to="/material/architecture"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Architecture
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/material/art"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Art
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/material/clothing"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Clothing
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/material/food"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Food
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink
          to="/material/tech"
          className={({ isActive }) =>
            isActive ? "nav-bar-active" : "nav-link"
          }
        >
          Technology
        </NavLink>
      </div>
    </div>
  );
}
