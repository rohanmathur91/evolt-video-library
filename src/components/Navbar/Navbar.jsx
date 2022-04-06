import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useVideo } from "../../contexts";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth();
  const { pathname } = useLocation();
  const { searchQuery, videoDispatch } = useVideo();

  const handleInputChange = (event) => {
    videoDispatch({ type: "SET_SEARCH_QUERY", payload: event.target.value });
  };

  return (
    <>
      <nav
        className={`${styles.navigation} flex-row items-center content-space-between w-100 sticky top-0 left-0 z-1`}
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
            <h2 className={`${styles.brand__logo} headline font-black`}>
              EVOLT
            </h2>
          </Link>

          <div className={`${styles.navbar__menu} ml-4`}>
            <Link to="/" className="font-semibold mr-1 rounded-sm p-1">
              Home
            </Link>

            <Link to="/explore" className=" font-semibold rounded-sm p-1">
              Explore
            </Link>
          </div>
        </div>

        {pathname === "/explore" && (
          <span className={`${styles.search} relative rounded-sm`}>
            <span className={`${styles.search__icon} absolute`}>
              <span className="material-icons-outlined">search</span>
            </span>
            <input
              type="text"
              autoComplete="false"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="search..."
              className={`${styles.search__input} border w-100 py-1 pl-6 pr-2 text-base rounded-sm`}
            />
          </span>
        )}

        <Link
          to={`${user ? "/profile" : "/login"}`}
          className={`${styles.profile__icon} cursor-pointer flex-column items-center`}
        >
          <span className="material-icons-outlined">person_outline</span>
          <span className="text-sm font-semibold">
            {user ? `Hi, ${user?.fullName.split(" ")[0]}` : "Login"}
          </span>
        </Link>
      </nav>

      <MobileNavigation
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
};
