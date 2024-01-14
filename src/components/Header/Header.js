import HeaderContactsBar from "./HeaderContactsBar/HeaderContactsBar";
import css from "./Header.module.css";

import HeaderRegistrationBar from "./HeaderRegistrationBar/HeaderRegistrationBar";
import HeaderNav from "./HeaderNav/HeaderNav";
const Header = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <HeaderContactsBar />
          <HeaderRegistrationBar />
        </div>
        <HeaderNav />
      </header>
    </>
  );
};
export default Header;
