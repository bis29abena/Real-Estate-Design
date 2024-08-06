import "./list.scss";
import { listData } from "../../lib/dummyData";
import Card from "../card/Card";

export default function List() {
  return (
    <div className="listcomp">
      {listData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}
