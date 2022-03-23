import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav
        className={`${styles.navigation} flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3`}
      >
        <div className="flex-row flex-center">
          <div
            onClick={() => setShowSidebar(true)}
            className={`${styles.menu} mr-1`}
          >
            <span
              className={`${styles.hamburger__menu} material-icons cursor-pointer`}
            >
              menu
            </span>
          </div>

          <Link to="/">
            <h3 className={`${styles.brand__logo} font-black`}>EVOLT</h3>
          </Link>

          <div className={`${styles.navbar__menu} ml-4`}>
            <Link to="/" className="font-semibold mr-1 rounded-sm p-1">
              Home
            </Link>

            <Link to="/videos" className=" font-semibold rounded-sm p-1">
              Explore
            </Link>
          </div>
        </div>

        <span className={`${styles.search} relative rounded-sm`}>
          <span className={`${styles.search__icon} absolute`}>
            <span className="material-icons-outlined">search</span>
          </span>
          <input
            type="text"
            autoComplete="false"
            placeholder="search..."
            className={`${styles.search__input} border w-100 py-1 pl-6 pr-2 text-base rounded-sm`}
          />
        </span>

        <div className={`${styles.profile__icon}`}>
          <Link to="/profile">
            <div className="cursor-pointer">
              <div className="icon-container">
                <span className="material-icons-outlined">person_outline</span>
              </div>
              <span className="text-sm font-semibold">Profile</span>
            </div>
          </Link>
        </div>
      </nav>

      <MobileNavigation
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
};
