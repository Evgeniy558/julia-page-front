import { HomeSvgSelector } from "../HomeSvgSelector/HomeSvgSelector";
import css from "./HeaderContactsBar.module.css";

const HeaderContactsBar = () => {
  return (
    <div className={css.container}>
      <a className={css.link} href="tel:+48111111111">
        <HomeSvgSelector id={"phone"} className={css.icon} />
        <span className={css.text}> +48 111 111 111</span>
      </a>
      <a className={css.link} href="mailto:test@test.ru">
        <HomeSvgSelector id={"mail"} className={css.icon} />
        <span className={css.text}> test@test.ru</span>
      </a>
    </div>
  );
};
export default HeaderContactsBar;
