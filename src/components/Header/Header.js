import HeaderContactsBar from "./HeaderContactsBar/HeaderContactsBar";
import css from "./Header.module.css";

import HeaderRegistrationBar from "./HeaderRegistrationBar/HeaderRegistrationBar";
const Header = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <HeaderContactsBar />
          <HeaderRegistrationBar />
        </div>
      </header>
    </>
  );
};
export default Header;
