import React from "react";
import "./styles/KazusPanel.min.css";
import ShopCartPanel from "./ShopCartPanel";

const KazusPanel = () => {
  return (
    <div className="kazus-panel">
      <div className="kazus-panel__overlay" />
      <div className="kazus-panel__background" />
      <div className="kazus-panel__container">
        <div className="container__offset offset--side"></div>
        <div className="container__midsection">
          <div className="midsection__content">
            <h1 className="midsection__heading">
              Prawo podatkowe
              <br /> mamy ogarnięte
            </h1>
          </div>
        </div>
        <ShopCartPanel />
        <div className="container__offset offset--side"></div>
      </div>
    </div>
  );
};

export default KazusPanel;
