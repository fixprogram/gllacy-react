/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Slider = ({ activeSlide, sliderTitles, setActiveSlide }) => {
  return (
    <div className="slider">
      {sliderTitles.map((title, id) => {
        return (
          <div
            className="slide"
            css={{ display: activeSlide === id ? "block" : "none" }}
            key={id}
          >
            <h2 className="slide__title">{title}</h2>
            <a href="12" className="site__btn slide__btn">
              Давайте оба!
            </a>
          </div>
        );
      })}

      <div className="slider-controls">
        {Array.from({ length: 3 }, (_, i) => i).map((el) => (
          <button
            className="slider-control"
            css={{ backgroundColor: activeSlide === el ? "white" : "" }}
            onClick={() => setActiveSlide(el)}
            key={el}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
