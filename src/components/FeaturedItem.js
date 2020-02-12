import React from "react";
import "./styles/FeaturedItem.min.css";
import item1 from "../assets/images/item-1.png";
import item2 from "../assets/images/item-2.png";
import item3 from "../assets/images/item-3.png";

const FeaturedItem = props => {
  let itemName = "";
  let itemImage = "";
  let itemAlt = "";

  switch (props.item) {
    case "kazus":
      itemName = "Kazus Podatkowy 1(6)2019";
      itemImage = item1;
      itemAlt = "Kazus Podatkowy zdjecie okladka";
      break;
    case "procedury":
      itemName = "Procedury administracyjne i podatkowe 2";
      itemImage = item2;
      itemAlt = "Procedury administracyje i podatkowe zdjecie okladka";
      break;
    case "prawo":
      itemName = "Prawo Pomocy Publicznej";
      itemImage = item3;
      itemAlt = "Prawo Pomocy Publicznej";
      break;
    default:
      break;
  }

  return (
    <article className="featured-item">
      <div className="featured-item__image-container">
        <img src={itemImage} className="image-container__image" alt={itemAlt} />
      </div>
      <div className="featured-item__description">
        <p className="description__heading">{itemName}</p>
        <p className="description__price">
          <span className="price__tag">98,76</span>
          <span className="price__currency">PLN</span>
        </p>
        <p className="description__vat">+ VAT 23%</p>
        <p className="description__details">SZCZEGÓŁY</p>
      </div>
    </article>
  );
};

export default FeaturedItem;
