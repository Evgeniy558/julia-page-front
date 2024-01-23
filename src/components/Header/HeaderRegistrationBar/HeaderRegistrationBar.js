import BarButton from "./BarButton/BarButton";
import LanguageSelector from "./LanguageDropdownMenu/LanguageDropdownMenu";
import css from "./HeaderRegistrationBar.module.css";
const HeaderRegistrationBar = () => {
  return (
    <div className={css.container}>
      <LanguageSelector />
      <BarButton />
    </div>
  );
};
export default HeaderRegistrationBar;
