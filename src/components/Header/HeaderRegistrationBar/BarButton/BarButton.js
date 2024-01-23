import css from "./BarButton.module.css";

const BarButton = () => {
  const handleRegistration = () => {
    console.log("redirect to registration window ");
  };
  const handleSend = () => {
    console.log("redirect to form page ");
  };

  return (
    <div className={css.buttonContainer}>
      <button onClick={() => handleSend()} type="button" className={css.button}>
        Отправь скан
      </button>
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
export default BarButton;
