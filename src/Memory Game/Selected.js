import React from "react";
import { useState } from "react/cjs/react.development";

const HomeGame = () => {
  const [routeLink, setRouteLink] = useState("Home");
  const Nav = ["Home", "About", "Contact"];
  const selectRoutLink = (selected) => {
    setRouteLink(selected);
  };
  return (
    <div>
      {Nav?.map((nav, index) => (
        <li key={index} style={{ margin: "20px" }}>
          <button
            onClick={() => selectRoutLink(nav)}
            // style={nav === routeLink ? { color: "purple" } : { color: "red" }}
            style={{ color: nav === routeLink ? "red" : "blue" }}
          >
            {nav}
          </button>
        </li>
      ))}
    </div>
  );
};

export default HomeGame;
