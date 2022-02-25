const Goods = () => {
  return (
    <div className="goods content-wrapper">
      <ul className="goods__list">
        <li className="goods__item goods__item--first goods__item--hit">
          <h2 className="goods__price">
            310<span className="goods__price--icon"></span>
            <span className="goods__price--weight goods__price--weight_first">
              /кг
            </span>
          </h2>
          <a href="3" className="goods__title">
            Сливочное с апельсиновым джемом и цитрусовой стружкой
          </a>
          <a href="catalog.html" className="goods__btn site__btn">
            Быстрый просмотр
          </a>
        </li>
        <li className="goods__item goods__item--second goods__item--hit">
          <h2 className="goods__price">
            380<span className="goods__price--icon"></span>
            <span className="goods__price--weight">/кг</span>
          </h2>
          <a href="2" className="goods__title">
            Сливочно-кофейное с кусочками шоколада
          </a>
          <a href="catalog.html" className="goods__btn site__btn">
            Быстрый просмотр
          </a>
        </li>
        <li className="goods__item goods__item--third goods__item--hit">
          <h2 className="goods__price">
            355<span className="goods__price--icon"></span>
            <span className="goods__price--weight">/кг</span>
          </h2>
          <a href="1" className="goods__title">
            Сливочно-клубничное с присыпкой из белого шоколада
          </a>
          <a href="catalog.html" className="goods__btn site__btn">
            Быстрый просмотр
          </a>
        </li>
        <li className="goods__item goods__item--fourth goods__item--hit">
          <h2 className="goods__price">
            415<span className="goods__price--icon"></span>
            <span className="goods__price--weight">/кг</span>
          </h2>
          <a href="0" className="goods__title">
            Сливочное крем-брюле с карамельной подливкой
          </a>
          <a href="catalog.html" className="goods__btn site__btn">
            Быстрый просмотр
          </a>
        </li>
      </ul>
      <section className="features">
        <h4 className="features__title">
          Магазин Глейси — это онлайн и офлайн магазин по продаже мороженого
          собственного производства на развес
        </h4>
        <div className="features__text-wrapper">
          <p className="features__text features__text_ice-cream">
            Все наше мороженое изготавливается на собственном производстве, с
            использованием современного оборудования и проверенных временем
            технологий.
          </p>
          <p className="features__text features__text_cow features__text_column2">
            Закупка ингредиентов производится только у проверенных фермерских
            хозяйств и компаний, с которыми нас связывает долговременное
            сотрудничество.
          </p>
          <p className="features__text features__text_eco">
            Для приготовления мороженого используются настоящие сливки и молоко
            высочайшего качества. Все дополнительные ингредиенты и добавки
            произведены из натурального, экологически чистого сырья.
          </p>
          <p className="features__text features__text_thermometer features__text_column2">
            Доставка нашего мороженого до заказчиков осуществляется в
            специальном термопаке, который не дает мороженому растаять в пути и
            позволяет сохранить превосходный вкус.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Goods;
