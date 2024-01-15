import HeaderContactsBar from "./HeaderContactsBar/HeaderContactsBar";
import css from "./SharedLayout.module.css";

import HeaderRegistrationBar from "./HeaderRegistrationBar/HeaderRegistrationBar";
import HeaderNav from "./HeaderNav/HeaderNav";
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
