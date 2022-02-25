const PopupForm = ({ showPopup, setShowPopup }) => {
  return (
    <div
      className="site__form--popup_overlay"
      css={{ display: showPopup ? "block" : "none" }}
    >
      <div className="site__form--popup">
        <h2 className="site__form__title">Мы обязательно вам ответим!</h2>
        <button className="btn-close-popup" onClick={setShowPopup}>
          <svg width="18" height="17">
            <line
              x1="0"
              y1="18"
              x2="18"
              y2="0"
              stroke="black"
              strokeWidth="2"
            ></line>
            <line
              x1="0"
              y1="0"
              x2="18"
              y2="18"
              stroke="black"
              strokeWidth="2"
            ></line>
          </svg>
        </button>
        <form action="index.html">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Как вас зовут?"
            className="site__form__input site__input site__form__name"
          />
          <label htmlFor="name" className="site__label site__label__name">
            Как вас зовут?
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ваша почта для ответа?"
            className="site__form__input site__input site__form__email"
          />
          <label htmlFor="email" className="site__label site__label__email">
            Ваша почта для ответа?
          </label>
          <textarea
            name="report"
            id="report"
            cols="30"
            rows="10"
            className="site__input site__form__report"
            placeholder="Напишите что-нибудь..."
          ></textarea>
          <label htmlFor="report" className="site__label site__label__report">
            Напишите что-нибудь...
          </label>
          <input
            type="submit"
            id="send-btn"
            value="Отправить"
            className="site__btn site__form__send"
          />
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
