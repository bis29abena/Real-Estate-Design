import { Link } from "react-router-dom";
import "./card.scss";
import { listDataObject } from "../../lib/dummyData";

type ListItemProps = {
  item: listDataObject;
};

export default function Card({ item }: ListItemProps) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/img/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/img/bed.png" alt="" />
              <span>{item.bedroom}</span>
            </div>
            <div className="feature">
              <img src="/img/bath.png" alt="" />
              <span>{item.bathroom}</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/img/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/img/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
