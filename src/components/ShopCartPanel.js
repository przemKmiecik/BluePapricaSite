import React from "react";
import "./styles/ShopCartPanel.min.css";
import { ReactSVG } from "react-svg";
import Icon__close from "../assets/icons/cancel.svg";
import ShopItem from "./ShopItem";

const ShopCartPanel = () => {
  return (
    <div className="shop-cart-panel">
      <div className="shop-cart-panel__container">
        <div className="container__shop">
          <p className="shop__heading">Twój koszyk</p>
          <div className="button__container"></div>
          <button className="shop__button button--close">
            <div className="button icon__offset">
              <ReactSVG src={Icon__close} className="icon__image--white" />
            </div>
          </button>
        </div>
        <ShopItem item="first" />
        <ShopItem item="second" />
        <ShopItem item="third" />
      </div>
      <div className="shop-cart-panel__details">
        <div className="details__content">
          <p className="content__price">Łączna Kwota</p>
        </div>
        <div className="details__total-price">
          <p className="total-price__amount">
            <span className="amount__text--normal">979,</span>
            <span className="amount__text--currency">00 PLN</span>

            <span className="amount__text--vat">+ VAT 23%</span>
          </p>
        </div>
      </div>
      <button className="shop-cart-panel__proceed-btn">
        <p className="proceed-btn__text">Przejdź do koszyka</p>
      </button>
    </div>
  );
};

export default ShopCartPanel;
