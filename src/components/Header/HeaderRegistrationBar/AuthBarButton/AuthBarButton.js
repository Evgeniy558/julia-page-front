import css from "./AuthBarButton.module.css";

const AuthBarButton = () => {
  return (
    <div>
      <button type="button" className={css.button}>
        Войти
      </button>
    </div>
  );
};
export default AuthBarButton;
