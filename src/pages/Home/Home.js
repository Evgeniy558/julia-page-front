import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";

import css from "./Home.module.css";
// import css from "./Home.module.css";
const Home = () => {
  return (
    <>
      <section className={css.section}>
        <h1>Home page</h1>
        <Slide
          urlImg="url('/images/test-intelligenza-sociale.jpg')"
          slideTitle={"Test Title slide_1"}
          slideText={"Titile slide_1 test"}
        />
        <Slide
          urlImg="url('/images/test2.jpg')"
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
