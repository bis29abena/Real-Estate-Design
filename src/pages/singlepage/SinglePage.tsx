import Slider from "../../components/slider/Slider";
import "./singlepage.scss";
import {
  singlePostData,
  singleDataObject,
  userData,
} from "../../lib/dummyData";
import Map from "../../components/map/Map";

export default function SinglePage() {
  return (
    <div className="single">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/img/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div className="title">General</div>
          <div className="listVertical">
            <div className="feature">
              <img src="/img/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/img/pet.png" alt="" />
              <div className="featureText">
                <span>Pets Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/img/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have rent ready in chash</p>
              </div>
            </div>
          </div>
          <div className="title">Sizes</div>
          <div className="sizes">
            <div className="size">
              <img src="/img/size.png" alt="" />
              <span>88sqft</span>
            </div>
            <div className="size">
              <img src="/img/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/img/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <div className="title">Nearby Places</div>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/img/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/img/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/img/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurants</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <div className="title">Locations</div>
          <div className="mapContainer">
            <Map item={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/img/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/img/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
