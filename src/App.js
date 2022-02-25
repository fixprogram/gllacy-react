/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import "./styles/App.css";

import Main from "./pages/Main";
import { SiteWrapper } from "./components/lib";

function App() {
  // Adding a pin

  // myGeoObject = new ymaps.GeoObject({}, {}),

  // myPieChart = new ymaps.Placemark([59.93864421465666,30.323254655100822], {}, {
  //         iconLayout: 'default#image',
  //         iconImageHref: './Images/SVG/pin.svg',
  //         iconImageSize: [80, 142],
  //         iconImageOffset: [-60, -122],
  // });

  // myMap.geoObjects.add(myPieChart);

  // {
  //   backgroundImage: url('../Images/slide-1.png'),
  //   backgroundColor: colors[activeSlide],
  // }

  return (
    <SiteWrapper>
      <Main />
    </SiteWrapper>
  );
}

export default App;
