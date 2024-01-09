import css from "./AuthBarButton.module.css";

const AuthBarButton = () => {
  const handleRegistration = () => {
    console.log("redirect to registration window ");
  };
  return (
    <div>
      <button
        onClick={() => handleRegistration()}
        type="button"
        className={css.button}
      >
        Войти
      </button>
    </div>
  );
};
export default AuthBarButton;
