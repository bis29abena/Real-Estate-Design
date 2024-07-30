import SearchBar from "../../components/searchbar/SearchBar";
import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title"> Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem
            adipisci maiores deserunt provident! Minus commodi laudantium
            tempora, similique exercitationem, necessitatibus assumenda ipsa
            minima perspiciatis ipsam, illum at vitae nihil?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/img/bg.png" alt="" />
      </div>
    </div>
  );
}
