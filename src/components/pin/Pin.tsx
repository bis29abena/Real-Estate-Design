import { Marker, Popup } from "react-leaflet";
import { listDataObject, singleDataObject } from "../../lib/dummyData";
import "./pin.scss";
import { Link } from "react-router-dom";

type ItemsProp = {
  item: listDataObject | singleDataObject;
};

// Type guard for listDataObject
const isList = (item: any): item is listDataObject => {
  return (item as listDataObject).img !== undefined
}

export default function Pin({ item }: ItemsProp) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popContainer">
          <img src={ isList(item) ? item.img : item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">{isList(item) ? item.bedroom : item.bedRooms} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
