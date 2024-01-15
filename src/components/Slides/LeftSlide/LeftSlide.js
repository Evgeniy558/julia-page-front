import css from "./LeftSlide.module.css";
const LeftSlide = () => {
  return (
    <>
      <h3 className={css.slide_title}>Вид работ</h3>
      <div className={css.slide}>
        <div className={css.slide_foto}>фото c треугольником</div>
        <div className={css.slide_text}>Тексе</div>
      </div>
    </>
  );
};
export default LeftSlide;
