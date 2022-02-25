const Blog = () => {
  return (
    <div className="blog">
      <section className="blog__block blog__news">
        <h4 className="blog__title">Новое в нашем блоге</h4>
        <a href="15" className="blog__link">
          10 способов сервировки фруктовых щербетов к столу
        </a>
      </section>
      <section className="blog__block blog__email">
        <div className="blog__email--wrapper">
          <p className="blog__text">
            Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего
            самого вкусного, что у нас происходит. Обещаем не спамить и не слать
            всякой ненужной ерунды. Честно '=)'
          </p>
          <form action="index.html" className="blog__form">
            <input
              type="email"
              name="email-blog"
              id="email-blog"
              placeholder="Электронная почта"
              className="site__input blog__email_input"
            />
            <label
              htmlFor="email-blog"
              className="site__label email-blog_label"
            >
              Электронная почта
            </label>
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Отправить"
              className="site__btn blog__btn"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
