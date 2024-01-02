import { useState, useEffect, useRef } from "react";
import { HomeSvgSelector } from "../../HomeSvgSelector/HomeSvgSelector";

import css from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const wrapperRef = useRef();
  console.log(wrapperRef);
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
    <div
      ref={wrapperRef}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
      className={css.container}
    >
      <HomeSvgSelector id="language" width={14} height={14} />
      <span>Выбери язык</span>

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
