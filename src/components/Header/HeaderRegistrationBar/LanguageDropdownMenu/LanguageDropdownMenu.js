import { useState, useEffect, useRef } from "react";
import { SvgSelector } from "../../../SvgSelector/SvgSelector";

import css from "./LanguageDropdownMenu.module.css";

const LanguageDropdownMenu = () => {
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const wrapperRef = useRef();

  const toggleDropdown = () => {
    setDropDownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropDownVisible(false);
    }
  };

  const handleClickLanguage = (ev) => {
    console.log("install language in store and refresh page", ev.target.id);
    //install language in store and refresh page
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
      <SvgSelector id="language" width={14} height={14} />
      <span>Выбери язык</span>
      {dropdownVisible && (
        <div
          className={`${css.dropdownContent} ${
            dropdownVisible ? css.visible : ""
          }`}
        >
          <a
            id="rus"
            href="#"
            onClick={handleClickLanguage}
            className={css.link}
          >
            Русский
          </a>
          <a
            id="eng"
            href="#"
            onClick={handleClickLanguage}
            className={css.link}
          >
            Английский
          </a>
          <a
            id="pol"
            href="#"
            onClick={handleClickLanguage}
            className={css.link}
          >
            Польский
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdownMenu;
