import React from "react";
import "./App.css";
import MenuBuilder from "./Molecules/MenuBuilder";
import MenuPreview from "./Molecules/MenuPreview";
import MenuSummary from "./Molecules/MenuSummary";

export default () => (
  <div className="wrapper">
    <MenuSummary />
    <div className="container menu-builder">
      <div className="row">
        <MenuBuilder />
        <MenuPreview />
      </div>
    </div>
  </div>
);
