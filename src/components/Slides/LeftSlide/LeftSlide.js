import { Transition } from "react-transition-group";
import "./LeftSlide.css";
// import css from "./LeftSlide.module.css";
import { useState, useRef, useEffect } from "react";

const LeftSlide = () => {
  const [isVisible, setVisible] = useState(false);
  const slideRefCont = useRef(null);
  const lastCall = useRef(0);

  const checkVisibility = () => {
    console.log("call");
    if (slideRefCont) {
      const rect = slideRefCont.current.getBoundingClientRect().top;
      if (rect * 1.05 <= window.innerHeight) {
        setVisible(true);
        console.log(true);
      }
    }
  };

  const throttledCheckVisibility = () => {
    const now = Date.now();
    if (now - lastCall.current > 200) {
      lastCall.current = now;
      checkVisibility();
    }
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", throttledCheckVisibility);
    window.addEventListener("resize", throttledCheckVisibility);

    return () => {
      window.removeEventListener("scroll", throttledCheckVisibility);
      window.addEventListener("resize", throttledCheckVisibility);
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setVisible(!isVisible)}>Show</button>
      </div>
      <div ref={slideRefCont} className="slideContainer">
        <Transition in={isVisible} timeout={100} className="tran">
          {(state) => (
            <div className={`slide ${state}`}>
              <div className="slide_foto">фото c треугольником</div>
              <div className="slide_text">Тексе asdasd asda adas aasda sad</div>
            </div>
          )}
        </Transition>
      </div>
      <div className="footer">
        <h2>footer</h2>
      </div>
    </>
  );
};
export default LeftSlide;
