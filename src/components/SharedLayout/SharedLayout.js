import HeaderContactsBar from "../Header/HeaderContactsBar/HeaderContactsBar";
import css from "./SharedLayout.module.css";

import HeaderRegistrationBar from "../Header/HeaderRegistrationBar/HeaderRegistrationBar";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <HeaderContactsBar />
          <HeaderRegistrationBar />
        </div>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
