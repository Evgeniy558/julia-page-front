import { HomeSvgSelector } from "../HomeSvgSelector/HomeSvgSelector";
import css from "./HeaderContactsBar.module.css";

const HeaderContactsBar = () => {
  return (
    <>
      <a className={css.link} href="tel:+48111111111">
        <HomeSvgSelector id={"phone"} />
        +48 111 111 111
      </a>
      <a className={css.link} href="test@test.ru">
        <HomeSvgSelector id={"mail"} />
        test@test.ru
      </a>
    </>
  );
};
export default HeaderContactsBar;
