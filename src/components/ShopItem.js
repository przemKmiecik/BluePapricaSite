import React from "react";
import "./styles/ShopItem.min.css";
import { ReactSVG } from "react-svg";
import Icon_book from "../assets/icons/book.svg";
import Icon_rubbish from "../assets/icons/rubbish-bin.svg";
import Icon_location from "../assets/icons/location-pin.svg";

const ShopItem = props => {
  let itemName = "";
  let itemIcon = "";

  switch (props.item) {
    case "first":
      itemName = "Kazus Podatkowy 1(6)2019";
      itemIcon = Icon_book;
      break;
    case "second":
      itemName = "Praktyczne problemy związane z realizacją podatku rolnego...";
      itemIcon = Icon_location;
      break;
    case "third":
      itemName = "Praktyczne problemy związane z realizacją podatku rolnego...";
      itemIcon = Icon_book;
      break;
    default:
      itemName = "Test Name";
      itemIcon = Icon_book;
  }

  return (
    <div className="shop-item">
      <div className="shop-item__container">
        <div className="container__item-details">
          <div className="item-details__item-icon">
            <div className="item-icon__container">
              <ReactSVG src={itemIcon} className="item-icon icon__offset" />
            </div>
          </div>
          <div className="item-details__item-description">
            <p className="item-description__heading">{itemName}</p>
          </div>
          <div className="item-details__item-delete">
            <div className="item-delate__container">
              <ReactSVG src={Icon_rubbish} className="icon__offset" />
            </div>
          </div>
        </div>
        <div className="container__item-price">
          <div className="item-price__heading">Cena</div>
          <div className="item-price__amount">
            <span className="amount__text--normal">98</span>
            <span className="amount__text--currency">,00 PLN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
