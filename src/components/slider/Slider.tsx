import { useState } from "react";
import "./slider.scss";

type SliderProps = {
  images: Array<string>;
};

export default function Slider({ images }: SliderProps) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: string) => {
    direction === "left"
      ? imageIndex === 0
        ? setImageIndex(images.length - 1)
        : typeof imageIndex === "number" && setImageIndex(imageIndex - 1)
      : imageIndex === images.length - 1
      ? setImageIndex(0)
      : typeof imageIndex === "number" && setImageIndex(imageIndex + 1);
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullslider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/img/arrow.png" alt="" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/img/arrow.png" alt="" className="right " />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
