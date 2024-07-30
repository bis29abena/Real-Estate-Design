import "./lispage.scss";
import { listData, listDataObject } from "../../lib/dummyData.ts";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map.tsx";

export default function ListPage() {
  const data: Array<listDataObject> = listData;

  return (
    <div className="list">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((list, index) => (
            <Card key={index} item={list} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map item={data} />
      </div>
    </div>
  );
}
