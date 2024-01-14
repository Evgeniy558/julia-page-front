import AuthBarButton from "./AuthBarButton/AuthBarButton";
import LanguageSelector from "./LanguageDropdownMenu/LanguageDropdownMenu";
import css from "./HeaderRegistrationBar.module.css";
const HeaderRegistrationBar = () => {
  return (
    <div className={css.container}>
      <LanguageSelector />
      <AuthBarButton />
    </div>
  );
};
export default HeaderRegistrationBar;
