import React from "react";
import "./styles/HeaderPanel.min.css";
import HeaderImage from "../assets/images/img.png";

const HeaderPanel = () => {
  return (
    <div className="header-panel">
      <div className="header-panel__background" />

      <header className="header-panel__container">
        <div className="container__offset offset--side" />
        <div className="header-panel__header">
          <div className="header__details">
            <h1 className="header__details-title">Czasopisma</h1>
            <p className="header__details-description">
              <span className="details-description--normal">
                Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu
                Podatkowego”, który tym razem poświęcony jest w dużej części
                zmianom w podatkach w roku 2019.
              </span>
              <br />
              <br />
              <span className="details-description--faded">
                Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie
                rozliczania kosztów używania samochodów osobowych, wprowadzenie
                „exit tax” czy zmiany dotyczące poboru podatku u źródła na
                gruncie podatków dochodowych, poświęcając im odrębne artykuły.
              </span>
            </p>
          </div>
          <div className="header__image">
            <div className="image__container">
              <img
                src={HeaderImage}
                alt="Kazu Podatkowy zdjecie okladka"
                className="image-offset"
              />
            </div>
          </div>
        </div>
        <div className="container__offset offset--side" />
      </header>
    </div>
  );
};

export default HeaderPanel;
