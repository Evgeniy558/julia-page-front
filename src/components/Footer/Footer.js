import { NavLink } from "react-router-dom";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <section className={css.footerContainer}>
          <div>
            <SvgSelector
              id="logo-footer"
              width={100}
              height={100}
            ></SvgSelector>
            <button>Отправь скан</button>
          </div>
          <div>
            <h4>Время работы</h4>
            <div>Ежедневно с 9.00 - 19.00 CET</div>
          </div>
          <div>
            <h4>Контакты</h4>
            <a className={css.link} href="tel:+48111111111">
              <SvgSelector
                width={14}
                height={14}
                id={"phone"}
                className={css.icon}
              />
              <span className={css.text}> +48 111 111 111</span>
            </a>
            <a className={css.link} href="mailto:test@test.ru">
              <SvgSelector
                width={14}
                height={14}
                id={"mail"}
                className={css.icon}
              />
              <span className={css.text}> test@test.ru</span>
            </a>
            <div>
              <a className={css.link} href="mailto:test@test.ru">
                <SvgSelector
                  width={14}
                  height={14}
                  id={"facebook-icon"}
                  className={css.icon}
                />
              </a>
              <a className={css.link} href="mailto:test@test.ru">
                <SvgSelector
                  width={14}
                  height={14}
                  id={"instagram-icon"}
                  className={css.icon}
                />
              </a>
              <a className={css.link} href="mailto:test@test.ru">
                <SvgSelector
                  width={14}
                  height={14}
                  id={"whatsapp-icon"}
                  className={css.icon}
                />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
