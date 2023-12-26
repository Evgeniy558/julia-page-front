import AuthBarButton from "./AuthBarButton/AuthBarButton";
import HeaderContactsBar from "./HeaderContactsBar/HeaderContactsBar";
import css from "./Header.module.css";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
const Header = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <HeaderContactsBar />
          <div>
            <LanguageSelector />
            <AuthBarButton />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
