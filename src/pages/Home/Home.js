import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import imageTest1 from "../../images/test1.jpg";
import imageTest2 from "../../images/test2.jpg";
import imageTest3 from "../../images/test3.jpg";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={css.section}>
        <h1 style={{ color: "orange" }}>Home page </h1>
        <Slide
          urlImg={imageTest1}
          slideTitle={"Test Title slide_1"}
          slideText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit accusantium cumque aliquid assumenda. Reiciendis numquam accusantium sit, minima fugit tenetur ad doloremque aliquam, voluptatum totam, nemo aliquid mollitia atque!"
          }
        />
        <Slide
          urlImg={imageTest2}
          slideType="right"
          slideTitle={"Test Title slide_2"}
          slideText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit accusantium cumque aliquid assumenda. Reiciendis numquam accusantium sit"
          }
        />
        <Slide
          urlImg={imageTest3}
          slideTitle={"Test Title slide_3"}
          slideText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit accusantium cumque aliquid assumenda. Reiciendis numquam accusantium sit, minima fugit tenetur ad doloremque aliquam, voluptatum totam, nemo aliquid mollitia atque!"
          }
        />
      </section>
      <Footer />
    </>
  );
};
export default Home;
