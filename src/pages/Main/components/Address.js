import MapInterface from "../../../components/Map";

const Address = ({ setShowPopup }) => {
  return (
    <div className="address" id="map">
      <div className="address__block--wrapper">
        <article className="address__block">
          <p className="address__text address__text_first">
            Адрес главного офиса и офлайн магазина:
          </p>
          <p className="address__text_bold">
            ул. Большая Конюшеская 19/8, Санкт-Петербург
          </p>
          <p className="address__text">
            Для заказов по телефону:
            <a href="tel:+88124502525" className="address__phone">
              8 812 450-25-25
            </a>
            (с 10 до 20 ежедневно)
          </p>
          <a
            href="16"
            className="site__btn adress__btn"
            onClick={(evt) => {
              evt.preventDefault();
              setShowPopup(true);
            }}
          >
            Форма обратной связи
          </a>
        </article>
      </div>
      <MapInterface />
    </div>
  );
};

export default Address;
