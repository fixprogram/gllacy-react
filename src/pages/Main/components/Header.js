/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { MainNav } from "../../../components/lib";

const Header = ({ children }) => {
  return (
    <header className="content-wrapper">
      <div
        css={{
          height: "115px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MainNav>
          <a href="1" className="header__logo">
            <svg aria-hidden="true" width="154" height="64">
              <g fill="#FFF">
                <path d="M59.292 42.755c-.833-.25-2.153.373-2.153.373s-3.027 2.513-17.84-.378c-10.908-2.129-16.583-1.917-16.583-1.917s1.833-12.5 1.333-16c0 0 0-.917-1.083-.917s-1.75.417-1.75 1 .167 4.417-.25 7.083c0 0-1.417 4.251-6.167 3.917s-5.75-3.75-6.167-6.083-.666-8.833.584-11.5c0 0 7.167.25 11.667-3.583s4.25-7.167 2.083-8.583S15.883 5 12.049 8.5s-5.083 7-5.083 7-5.625-1.208-4.333-7.083C3.982 2.277 12.393 3 12.393 3c1.75.333 1.823.5 2.406-.083s1-2.083-1.75-2.167S2.049 2.021.466 7.5c-1.685 5.828 1.435 9.997 5.622 10.643 0 0-2.288 10.107.545 15.107s6.94 4.917 8.595 4.917 4.572-.916 5.405-2.25c0 0-.393 3.581-.724 4.88 0 0-6.935-.095-9.109 1.036-3.688 1.917-2.917 6.48-1.5 8.104 1.204 1.38 4.812 2.125 7.417.896 2.705-1.277 4.865-3.739 5.549-7.697 0 0 6.368-.469 12.534 1.364s14.756 3.556 17.34 3.556 8.046-.738 8.327-2.889c.186-1.438-.342-2.162-1.175-2.412zM15.862 9.328s3.281-2.5 4.844-.938c0 0 1.25 1.281.094 2.812-.656.869-2.396 3.589-10.656 4.938-.001.001 2.593-4.562 5.718-6.812zm.265 38.906s-4.531 2.469-5.047-.875c-.333-2.158.89-3.18 1.687-3.57s1.875-.879 6.579-.711c0 0 0 3.328-3.219 5.156z" />
                <path d="M73.576 24.477l-.002 6.77c-.007.038-.019.075-.021.115-.035.931-.418 1.734-.861 2.537a5.56 5.56 0 0 1-1.18 1.463c-.533.469-.877-.564-1.078-.985-1.391-2.915-.726-6.812-.187-9.862.257-1.454-2.706-1.077-2.936.222-.334 1.888-.869 5.118-.547 7.906-.587.101-1.167.366-1.341.737-.511 1.088-2.009 4.704-3.833 3.258-1.319-1.046-1.461-3.743-1.6-5.268-.191-2.111.154-4.267.816-6.266-.058.173 1.14-2.823 1.67-1.703.326.69.032 2.641-.608 3.122-1.571 1.182.875 1.67 1.824.956 1.802-1.356 3.05-5.708-.074-6.232-3.464-.581-5.438 2.923-6.163 5.697-.335 1.279-.563 3.074-.504 4.886-.481.832-2.097 3.533-3.047 4.026-1.125.584-1.104-.229-1.062-.75s.542-5.146.813-8.271c.175-2.014-.062-2.771-.5-3.646s-3.994-2.825-7.146.833c-2.183 2.534-2.912 4.927-3.08 7.054-.213.425-.443.873-.71 1.362-1.5 2.75-3.384 3.909-4.062 2-.594-1.672-.906-3.703-.75-6.188.005-.088 3.5-5 5.062-11.75s1.25-10.062.438-10.625-4.25-1.938-6.312 6.25c-1.523 6.047-2.137 12.5-1.565 17.879a41.603 41.603 0 0 1-1.229 2.434c-1.5 2.75-3.384 3.909-4.062 2-.594-1.672-.906-3.703-.75-6.188.005-.088 3.5-5 5.062-11.75s1.25-10.062.438-10.625-4.25-1.938-6.312 6.25-2.465 17.126-.5 23.125c0 0 1.081 3.375 3.103 3.125 1.671-.207 3.656-1.846 4.829-4.906.144.615.301 1.215.487 1.781 0 0 1.081 3.375 3.103 3.125 1.376-.17 2.964-1.32 4.14-3.423.711 1.839 2.239 3.34 4.213 2.985 2.667-.479 3.218-1.932 3.218-1.932s-.051 2.383 1.657 2.383c1.525 0 2.729-.889 3.938-3.159.409-.77.642-1.218.773-1.481.356 2.144 1.241 4.055 3.018 4.83 2.976 1.298 5.62-1.172 7.167-3.608.473 1.199 1.24 2.156 2.461 2.616 1.338.505 2.659.013 3.772-.928-.005 1.173-.016 2.346-.026 3.519-.584.001-1.239.143-1.547.415-3.203 2.825-4.598 6.241-4.195 10.521.233 2.48 2.576 3.597 4.725 2.662 3.101-1.35 3.57-6.021 3.83-8.836.625-6.829.139-13.939.139-20.791 0-1.293-2.906-.702-2.906.329zM30.252 13.281c.688-2.656 1.329-3.719 1.954-3.719s.938.719.469 3-1.987 8.626-4.094 12.75c0 0 .983-9.374 1.671-12.031zm8.418 0c.688-2.656 1.329-3.719 1.954-3.719s.938.719.469 3-1.987 8.626-4.094 12.75c0 0 .984-9.374 1.671-12.031zm12.859 12.427c-.074.58-.459 4.292-.959 6.292s-.953 2.78-2.583 3.438c-1.704.688-2.438-1.418-2.438-1.418-1.146-3.208.396-6.042 1.667-7.919s2.573-2.096 3.312-1.955a1.36 1.36 0 0 1 1.001 1.562zm21.972 18.056c-.038 2.683-.381 5.377-1.579 7.81-.701.146-1.029-.117-1.239-1.237a10.734 10.734 0 0 1 .049-3.251c.24-2.021 1.382-3.736 2.783-5.153-.007.61-.005 1.22-.014 1.831zM92.301 21.649c-2.541-1.229-4.811-3.29-5.715-6-1.279-3.827 2.928-6.647 6.275-6.474 3.488.181 5.137 3.625 4.967 6.709-.061 1.095-.748 3.557-2.096 2.277-.951-.906-1.369-2.375-1.566-3.632-.191-1.21-3.1-.495-2.898.776.578 3.657 4.527 7.689 7.898 3.863 3.014-3.418 1.656-9.462-2.574-11.233-4.523-1.893-10.135.077-12.529 4.327-2.732 4.85 2.748 9.598 6.629 11.321 6.225 3.338 6.455 14.054-1.818 14.126-3.43.03-6.619-2.438-7.693-5.609-.572-1.688-.279-7.553 2.014-8.003 1.807-.354 1.311-2.04-.453-1.693-3.713.727-5.08 5.515-4.721 8.858.576 5.341 5.578 8.339 10.631 8.295 4.682-.041 8.654-2.929 9.625-7.549.938-4.482-1.912-8.768-5.976-10.359z" />
                <path d="M110.881 37.532c-2.855-1.552-1.223-7.563-.791-9.875.279-1.492 1.555-3.794-.494-4.296-2.385-.584-5.223 1.687-7.277 3.858.012-2.506.17-4.999.553-7.478 3.088-1.576 5.4-3.821 7.182-7.395 1.295-2.604 1.941-7.971-2.461-6.422-3.986 1.403-5.377 6.017-6.619 9.688a29.258 29.258 0 0 0-1.094 4.378c-.398.16-.803.312-1.219.44-1.658.512-1.441 1.407.238.89.275-.085.543-.173.809-.263-.793 5.612-.256 11.49.248 17.02.049.54 2.969-.001 2.898-.777-.227-2.468-.414-4.922-.496-7.364.283-.104.52-.236.633-.387.889-1.175 1.982-2.203 3.08-3.177.299-.261.605-.513.92-.755l.459-.339c.674-.53.799-.543.381-.04-.061.916-.459 1.93-.625 2.832-.549 2.992-2.127 8.889 1.346 10.775.745.403 3.43-.715 2.329-1.313zm-6.486-24.101c.305-.897.715-1.77 1.094-2.636.473-1.082 1.73-4.768 2.645-3.004.729 1.404-.426 3.717-.938 5.067-.83 2.185-2.254 3.95-4.047 5.297.31-1.58.714-3.155 1.246-4.724z" />
                <path d="M121.635 30.527c.006-3.288-.375-7.506-4.303-7.863-4.309-.392-6.006 4.123-6.064 7.49-.004.274.135.456.35.569-.004 3.15.76 7.26 4.508 7.197 4.181-.068 5.505-3.714 5.509-7.393zm-4.998 5.475c-2.441-.971-2.219-5.203-2.053-7.24a.542.542 0 0 0-.246-.525c.301-2.017 1.082-5.03 2.863-3.506 1.416 1.211 1.445 4.148 1.521 5.835.053 1.144-.105 6.224-2.085 5.436zM153.135 48.58c-1.127-2.886-3.588-3.994-6.293-4.128a12.032 12.032 0 0 0-1.133-2.076c-3.91-5.788-13.189-5.019-19.475-1.948-.041-.913-.09-1.824-.129-2.73 2.533.127 5-.852 6.502-2.997 1.676-2.395 1.434-6.632.777-9.314-.619-2.525-3.088-2.072-4.93-1.234-.656.298-1.279.744-1.865 1.261.055-.672.111-1.345.16-2.014.111-1.542-2.842-1.153-2.941.203-.453 6.196-.297 12.366-.441 18.54-4.271 3.862-5.348 7.501-5.391 12.06-.02 2.271 1.934 3.961 3.982 2.386 2.895-2.224 3.771-6.629 4.172-9.984.178-1.491.197-3.009.16-4.528 4.49-2.941 10.635-3.149 15.205-.1.938.626 1.711 1.594 2.262 2.696-1.688.3-3.311.855-4.613 1.482-1.713.825-4.256 2.765-4.131 4.936.098 1.69 1.029 2.638 2.283 2.979.078.033.17.063.299.084 6.135.995 10.703-2.626 9.828-7.737 2.984 1.625 4.107 5.405 3.043 8.66-2.387 7.304-11.584 8.932-16.949 4.054-.574-.523-3.184.577-2.729.992 7.786 7.076 27.058.53 22.347-11.543zm-29.944-1.775c-.102 1.738-.459 3.549-1.145 5.143a22.06 22.06 0 0 1-.801 1.598s-.26.064-.316-.717c.025-2.858.809-5.577 2.346-7.892-.025.623-.048 1.245-.084 1.868zm3.129-17.858a.768.768 0 0 0 .146-.172c.516-.917 1.207-1.728 1.908-2.507.527-.586 1.119-1.138 1.803-1.539.324.162.654.991.777 2.131.303 2.772.439 10.096-3.945 9.407-.209-.033-.57.043-.947.171v-.039c-.06-2.478.075-4.967.258-7.452zm13.08 23.744c-.016-.003-.037-.001-.055-.003-1.689-.398-1.502-1.99-1.289-3.086.492-2.524 3.576-3.883 6.117-3.959 1.284 3.567.296 7.87-4.773 7.048z" />
              </g>
            </svg>
          </a>
          <nav className="header__nav">
            <ul className="nav__list--main">
              <li className="header__item main-nav__item-catalog">
                <a href="catalog.html" className="main-nav__link-catalog">
                  <span className="main-nav__link_text">Каталог</span>
                </a>
                <div className="main-nav__catalog-wrapper">
                  <ul className="catalog-wrapper__list">
                    <li className="catalog-wrapper__item catalog-wrapper__item_title">
                      <h4 className="catalog-wrapper__title">Новинки</h4>
                    </li>
                    <li className="catalog-wrapper__item">
                      <a href="catalog.html" className="catalog-wrapper__link">
                        Сливочное
                      </a>
                    </li>
                    <li className="catalog-wrapper__item">
                      <a href="2" className="catalog-wrapper__link">
                        Щербеты
                      </a>
                    </li>
                    <li className="catalog-wrapper__item">
                      <a href="3" className="catalog-wrapper__link">
                        Фруктовый лед
                      </a>
                    </li>
                    <li className="catalog-wrapper__item">
                      <a href="4" className="catalog-wrapper__link">
                        Мелорин
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header__item">
                <a href="5" className="main-nav__link">
                  Доставка и оплата
                </a>
              </li>
              <li className="header__item">
                <a href="6" className="main-nav__link">
                  О Компании
                </a>
              </li>
            </ul>
          </nav>
        </MainNav>
        <div className="main-nav__list--user">
          <ul className="nav__list--user">
            <li className="main-nav__item main-nav__item_search">
              <a
                href="7"
                className="main-nav__link_user main-nav__link--search"
              >
                <svg aria-hidden="true" width="17" height="17">
                  <path
                    fill="#fff"
                    d="M16.958 15.527L11.75 10.32A6.455 6.455 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13a6.465 6.465 0 0 0 3.839-1.263l5.205 5.204 1.414-1.414zM6.5 11C4.019 11 2 8.981 2 6.5S4.019 2 6.5 2 11 4.019 11 6.5 8.981 11 6.5 11z"
                  />
                </svg>
              </a>
              <div className="search-form-wrapper">
                <form action="index.html" className="search-wrapper__form">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Что ищем?"
                    className="site__input form-wrapper__search"
                  />
                  <label
                    htmlFor="search"
                    className="site__label form-wrapper__search_label"
                  >
                    Что ищем?
                  </label>
                </form>
              </div>
            </li>
            <li className="main-nav__item main-nav__item_login">
              <a href="8" className="main-nav__link_user main-nav__link--login">
                <span className="main-nav__icon main-nav__icon_login">
                  <svg aria-hidden="true" width="21" height="19">
                    <g fill="#fff">
                      <path d="M6 14.875L12.917 9.5 6 4.125v2.917H-.042v4.917H6z" />
                      <path d="M18 0H5C3.9 0 3 .9 3 2v2h2V2h13v15H5v-2H3v2c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
                    </g>
                  </svg>
                </span>
                Вход
              </a>
              <div className="login-form-wrapper">
                <form action="index.html" className="login-wrapper__form">
                  <input
                    type="email"
                    name="email-login"
                    id="email-login"
                    placeholder="Электронная почта"
                    className="site__input login-wrapper__input login-wrapper__email"
                  />
                  <label
                    htmlFor="email-login"
                    className="site__label login-wrapper__input_label email_label"
                  >
                    Электронная почта
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    className="site__input login-wrapper__input login-wrapper__password"
                  />
                  <label
                    htmlFor="password"
                    className="site__label login-wrapper__input_label password_label"
                  >
                    Пароль
                  </label>
                  <input
                    type="submit"
                    value="Войти"
                    className="site__btn login-wrapper__btn"
                  />
                  <div className="login-wrapper__form-links">
                    <a href="9" className="login-wrapper__form-link">
                      <span className="login-wrapper__form-link_text">
                        Забыли пароль?
                      </span>
                    </a>
                    <a href="10" className="login-wrapper__form-link">
                      <span className="login-wrapper__form-link_text">
                        Новая регистрация
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </li>
            <li className="main-nav__item">
              <a href="11" className="main-nav__link_user main-nav__link--cart">
                <span className="main-nav__icon">
                  <svg aria-hidden="true" width="21" height="20">
                    <g fill="#FFF">
                      <path d="M5.657 2.031L5.422 0H0v2h3.64l1.5 13h13.988l1.699-12.969H5.657zM17.372 13H6.922L5.888 4.031h12.66L17.372 13z" />
                      <circle cx="6.984" cy="18" r="2" />
                      <circle cx="15.984" cy="18" r="2" />
                    </g>
                  </svg>
                </span>
                Пусто
              </a>
            </li>
          </ul>
          <p className="main-nav__schedule">
            С 10 до 20, ежедневно
            <a href="tel:+88128402525" className="main-nav__phone-number">
              8 812 450-25-25
            </a>
          </p>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;