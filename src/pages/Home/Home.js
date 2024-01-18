import LeftSlide from "../../components/Slides/LeftSlide/LeftSlide";
import RightSlide from "../../components/Slides/RightSlide/RightSlide";
import css from "./Home.module.css";
// import css from "./Home.module.css";
const Home = () => {
  return (
    <>
      <section className={css.section}>
        <h1>Home page</h1>
        <LeftSlide />
      </section>
      <section>
        Test section asdaas asdaasd asdasdasd asdaasd <p>test</p>
      </section>
    </>
  );
};
export default Home;
