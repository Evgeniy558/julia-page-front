import { Transition } from "react-transition-group";
import "./slide.css";
import { useState, useRef, useEffect } from "react";

const Slide = ({
  slideType = "left",
  urlImg = "",
  slideTitle = "",
  slideText = "",
}) => {
  const [isVisible, setVisible] = useState(false);
  const slideRefCont = useRef(null);
  const lastCall = useRef(0);

  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", throttledCheckVisibility);
    window.addEventListener("resize", throttledCheckVisibility);

    return () => {
      window.removeEventListener("scroll", throttledCheckVisibility);
      window.addEventListener("resize", throttledCheckVisibility);
    };
  }, []);

  const checkVisibility = () => {
    console.log("call");
    if (slideRefCont) {
      const rect = slideRefCont.current.getBoundingClientRect().top;
      if (rect * 1.05 <= window.innerHeight) {
        setVisible(true);
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

  return (
    <section ref={slideRefCont} className={`slideContainer ${slideType}`}>
      <Transition in={isVisible} timeout={100} className="tran">
        {(state) =>
          slideType === "left" ? (
            <div className={`slide ${state} ${slideType}`}>
              <div
                className="slide_photo"
                style={{
                  backgroundImage: `${urlImg}`,
                }}
              ></div>
              <header className="slide_info">
                <h3 className="slide_title">{slideTitle}</h3>
                <div className="slide_text"> {slideText}</div>
              </header>
            </div>
          ) : (
            <div className={`slide ${state} ${slideType}`}>
              <header className="slide_info">
                <h3 className="slide_title">{slideTitle}</h3>
                <div className="slide_text"> {slideText}</div>
              </header>
              <div
                className={`slide_photo ${slideType}`}
                style={{
                  backgroundImage: `${urlImg}`,
                }}
              ></div>
            </div>
          )
        }
      </Transition>
    </section>
  );
};
export default Slide;
