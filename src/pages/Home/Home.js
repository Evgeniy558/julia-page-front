import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import imageTest1 from "../../images/test1.jpg";
import imageTest2 from "../../images/test2.jpg";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={css.section}>
        <h1 style={{ color: "orange" }}>Home page </h1>
        <Slide
          urlImg={imageTest1}
          slideTitle={"Test Title slide_1"}
          slideText={"Titile slide_1 test"}
        />
        <Slide
          urlImg={imageTest2}
          slideType="right"
          slideTitle={"Test Title slide_2"}
          slideText={"Titile slide_2 test"}
        />
      </section>
      <Footer />
    </>
  );
};
export default Home;
