import { useState, useEffect, useRef } from "react";
import { HomeSvgSelector } from "../HomeSvgSelector/HomeSvgSelector";
import css from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const wrapperRef = useRef(); // Используем ref для обертывающего div

  const toggleDropdown = () => {
    setDropDownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropDownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={css.container}>
      <div onClick={toggleDropdown}>
        <HomeSvgSelector id="language" />
        <span>Выбери язык</span>
      </div>
      {dropdownVisible && (
        <div
          className={`${css.dropdownContent} ${
            dropdownVisible ? css.visible : ""
          }`}
        >
          <a href="mailto:test@test.ru" className={css.link}>
            Русский
          </a>
          <a href="mailto:test@test.ru" className={css.link}>
            Английский
          </a>
          <a href="mailto:test@test.ru" className={css.link}>
            Польский
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
