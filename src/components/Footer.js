/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const Footer = () => {
  return (
    <footer className="site__footer content-wrapper">
      <div className="site__footer__social-icons">
        <ul className="social-icons__list">
          <li className="social-icons__item">
            <a href="17" className="social-icon tw">
              Мы в твиттере
            </a>
          </li>
          <li className="social-icons__item">
            <a href="18" className="social-icon insta">
              Мы в инстаграмме
            </a>
          </li>
          <li className="social-icons__item">
            <a href="19" className="social-icon fb">
              Мы в фэйсбуке
            </a>
          </li>
          <li className="social-icons__item">
            <a href="20" className="social-icon vk">
              Мы вконтакте
            </a>
          </li>
        </ul>
      </div>
      <ul className="site__footer__links">
        <li className="site__footer__item">
          <a href="21" className="site__footer__link">
            Для поставщиков
          </a>
        </li>
        <li className="site__footer__item">
          <a href="22" className="site__footer__link">
            Наши документы
          </a>
        </li>
        <li className="site__footer__item">
          <a href="23" className="site__footer__link">
            О производстве
          </a>
        </li>
        <li className="site__footer__item">
          <a href="24" className="site__footer__link">
            Экологические стандарты
          </a>
        </li>
      </ul>
      <div className="site__footer__copyright">
        <a
          href="https://htmlacademy.ru/intensive/htmlcss"
          className="site__footer__HTML-Academy-img"
          css={css`
            font-size: 0;
          `}
        >
          HTML
        </a>
        <p className="site__footer__copyright-text">
          Сделано в
          <a href="25" className="site__footer__HTML-Academy-link">
            HTML Academy
          </a>
          © 2017
        </p>
      </div>
    </footer>
  );
};

export default Footer;
