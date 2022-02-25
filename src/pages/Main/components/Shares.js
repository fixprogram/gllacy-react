const Shares = () => {
  return (
    <div className="shares content-wrapper">
      <section className="shares__block shares__block_raspberries">
        <h2 className="shares__block__title">Малинка даром!</h2>
        <p className="shares__block__text">
          При покупке 2 кг любого фруктового мороженого, добавим в ваш заказ
          банку малинового варенья бесплатно.
        </p>
        <a
          href="catalog.html"
          className="site__btn shares__block__btn shares__block__btn_jam"
        >
          Хочу варенье!
        </a>
      </section>
      <section className="shares__block shares__block_chokolate">
        <h2 className="shares__block__title">Шоколадки даром!</h2>
        <p className="shares__block__text">
          При покупке 2 кг пломбира, добавим в ваш заказ упаковку вкуснейшей
          шоколадной присыпки совершенно бесплатно.
        </p>
        <a
          href="catalog.html"
          className="site__btn shares__block__btn shares__block__btn_chokolate"
        >
          Хочу шоколадки!
        </a>
      </section>
    </div>
  );
};

export default Shares;
