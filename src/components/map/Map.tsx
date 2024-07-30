import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { listDataObject } from "../../lib/dummyData";

import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import ListPage from "../../pages/listpage/ListPage";

type ItemsArrayProps = {
  item: Array<listDataObject>;
};
ListPage;

export default function Map({ item }: ItemsArrayProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {item.map((estate, index) => (
        <Pin item={estate} key={index} />
      ))}
    </MapContainer>
  );
}
