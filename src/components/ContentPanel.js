import React from "react";
import "./styles/ContentPanel.min.css";
import FeaturedItem from "./FeaturedItem";

const ContentPanel = () => {
  return (
    <div className="content-panel">
      <div className="content-panel__container">
        <div className="container__offset offset--side"></div>
        <section className="content-panel__content">
          <h2 className="content__heading">Wyszukaj czasopismo</h2>
          <div className="content__container">
            <div className="content__items-section">
              <FeaturedItem item="kazus" />
              <FeaturedItem item="kazus" />
              <FeaturedItem item="procedury" />
              <FeaturedItem item="prawo" />
            </div>
            <div className="content__items-section">
              <FeaturedItem item="kazus" />
              <FeaturedItem item="prawo" />
              <FeaturedItem item="procedury" />
              <FeaturedItem item="prawo" />
            </div>
          </div>
        </section>
        <div className="container__offset offset--side"></div>
      </div>
    </div>
  );
};

export default ContentPanel;
