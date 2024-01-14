import { NavLink } from "react-router-dom";
import css from "./HeaderNav.module.css";
const HeaderNav = () => {
  return (
    <section className={css.navBar}>
      <div className={css.titleWrap}>
        <div className={css.title}>Имя Фамилия</div>
        <div className={css.titleDescription}>
          Ваш консультант и поектант в цифровой стоматологии
        </div>
      </div>
      <nav className={css.navMenu}>
        <NavLink className={css.navMenuItem} to="/">
          Главная страница
        </NavLink>
        <NavLink className={css.navMenuItem} to="/prices">
          Цены
        </NavLink>
        <NavLink className={css.navMenuItem} to="/contacts">
          Контакт
        </NavLink>
      </nav>
    </section>
  );
};
export default HeaderNav;
