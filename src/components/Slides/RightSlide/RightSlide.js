import css from "./RightSlide.module.css";
const RightSlide = () => {
  return (
    <>
      <h3 className={css.slide_title}>Вид работ</h3>
      <div className={css.slide}>
        <div className={css.slide_text}>Тексе</div>
        <div className={css.slide_foto}>фото c треугольником</div>
      </div>
    </>
  );
};
export default RightSlide;
