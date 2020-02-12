import React from "react";
import "./styles/NavPanel.min.css";
import { ReactSVG } from "react-svg";
import LogoIcon from "../assets/images/logo.svg";
import Icon__MagnifyingGlass from "../assets/icons/magnifying-glass.svg";
import Icon_User from "../assets/icons/user.svg";
import Icon_Cart from "../assets/icons/group-32.svg";

const NavPanel = () => {
  return (
    <div className="nav-panel">
      <div className="nav-panel__container">
        <div className="container__offset offset--side"></div>
        <nav className="container__header">
          <ReactSVG src={LogoIcon} className="header__logo" />
          <div className="container__offset offset--inner-blank" />
          <div className="container__mobile">
            <button className="mobile__button icon--active">
              <p className="button_paragraph">≡</p>
            </button>
          </div>
          <div className="header__link-container">
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                O Kazusie
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                O Firmie
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                Czasopisma
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                Szkolenia
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                Baza Wiedzy
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                Kazus TV
              </a>
            </div>
            <div className="container__offset offset--nav-link">
              <a href="/index.html" className="container__link">
                Kontakt
              </a>
            </div>
          </div>
          <div className="container__offset offset--outer-blank"></div>
          <div className="container__offset offset--menu">
            <div className="container__icon icon--active">
              <div className="icon__image">
                <ReactSVG
                  src={Icon__MagnifyingGlass}
                  className="icon__image--white"
                />
              </div>
            </div>

            <div className="container__icon">
              <div className="icon__image">
                <ReactSVG src={Icon_User} />
              </div>
            </div>

            <div className="container__icon">
              <div className="icon__image">
                <ReactSVG src={Icon_Cart} />
                <div className="icon__count-block">
                  <p className="count-block__number">2</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container__offset offset--side"></div>
      </div>
    </div>
  );
};

export default NavPanel;
