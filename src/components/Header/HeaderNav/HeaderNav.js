import css from "./HeaderNav.module.css";
const HeaderNav = () => {
  return (
    <nav className={css.navBar}>
      <div className={css.titleWrap}>
        <div className={css.title}>Юлия Прищепова</div>
        <div className={css.titleDescription}>
          Ваш консультант и поектант в цифровой стоматологии
        </div>
      </div>
      <ul className={css.navMenu}>
        <li className={css.navMenuItem}>Главная страница</li>
        <li className={css.navMenuItem}>Цены</li>
        <li className={css.navMenuItem}>Контакт</li>
      </ul>
    </nav>
  );
};
export default HeaderNav;
