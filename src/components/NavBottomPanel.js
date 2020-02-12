import React from "react";
import "./styles/NavBottomPanel.min.css";
import { ReactSVG } from "react-svg";
import Icon_arrow from "../assets/icons/arrow.svg";
import Icon_arrow2 from "../assets/icons/arrow2.svg";

const NavBottomPanel = () => {
  return (
    <div className="nav-bottom-panel">
      <div className="nav-bottom-panel__container">
        <div className="nav-bottom-panel__slider">
          <div className="slider__number">
            <ReactSVG src={Icon_arrow} className="number__styling" />
          </div>
          <div className="slider__number">
            <p className="number__styling">1</p>
          </div>
          <div className="slider__number">
            <p className="number__styling">2</p>
          </div>
          <div className="slider__number number--active">
            <p className="number__styling">3</p>
          </div>
          <div className="slider__number">
            <p className="number__styling">4</p>
          </div>
          <div className="slider__number">
            <p className="number__styling">5</p>
          </div>
          <div className="slider__number">
            <ReactSVG src={Icon_arrow2} className="number__styling" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBottomPanel;
