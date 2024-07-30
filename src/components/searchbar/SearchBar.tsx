import { useState } from "react";
import "./searchbar.scss";

type SearcType = "buy" | "rent";

type SearchObject = {
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
};

const types: Array<SearcType> = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState<SearchObject>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value: SearcType) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button
            key={index}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/img/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
