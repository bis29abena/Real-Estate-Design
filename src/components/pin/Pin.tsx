import { Marker, Popup } from "react-leaflet";
import { listDataObject } from "../../lib/dummyData";
import "./pin.scss";
import { Link } from "react-router-dom";

type ItemsProp = {
  item: listDataObject;
};

export default function Pin({ item }: ItemsProp) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
