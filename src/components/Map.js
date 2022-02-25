import { YMaps, Map, Placemark } from "react-yandex-maps";

const MapInterface = () => {
  return (
    <YMaps>
      <Map
        width="100%"
        height="100%"
        defaultState={{
          center: [59.938979223084836, 30.329105563537592],
          zoom: 16,
          controls: [],
        }}
      >
        <Placemark
          geometry={[59.93864421465666, 30.323254655100822]}
          options={{
            iconLayout: "default#image",
            iconImageHref: "./Images/SVG/pin.svg",
            iconImageSize: [80, 142],
            iconImageOffset: [-60, -122],
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapInterface;
