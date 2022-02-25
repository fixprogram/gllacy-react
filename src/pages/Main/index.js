/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState, useEffect } from "react";
import Goods from "./components/Goods";
import Header from "./components/Header";
import PopupForm from "./components/PopupForm";
import Shares from "./components/Shares";
import Blog from "./components/Blog";
import Address from "./components/Address";
import Slider from "./components/Slider";

import Slide1 from "./styles/slide-1.png";
import Slide2 from "./styles/slide-2.png";
import Slide3 from "./styles/slide-3.png";
import Footer from "../../components/Footer";

const sliderTitles = [
  "Крем-брюле и пломбир с малиновым джемом",
  "Шоколадный пломбир и лимонный сорбет",
  "Пломбир с помадкой и клубничный щербет",
];

const colors = ["#849d8f", "#8996a6", "#9d8b84"];

const Main = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && showPopup) {
        setShowPopup(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showPopup]);

  return (
    <div
      css={css`
        background-color: ${colors[activeSlide]};
        background-image: url(${activeSlide === 0
          ? Slide1
          : activeSlide === 1
          ? Slide2
          : Slide3});
        background-repeat: no-repeat;
        background-position: top center;
        transition: background-image 0.5s ease, background-color 0.5s ease;
      `}
    >
      <Header>
        <Slider
          activeSlide={activeSlide}
          sliderTitles={sliderTitles}
          setActiveSlide={setActiveSlide}
        />
      </Header>

      <Shares />

      <Goods />

      <Blog />

      <Address setShowPopup={() => setShowPopup(true)} />

      <Footer />

      <PopupForm
        showPopup={showPopup}
        setShowPopup={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Main;
