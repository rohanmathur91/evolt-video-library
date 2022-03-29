import React from "react";
import { Link } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { useVideo } from "../../contexts";
import { Footer } from "../../components";
import styles from "./Home.module.css";

export const Home = () => {
  const { categories, videoDispatch } = useVideo();
  useScrollToTop();
  useDocumentTitle("Home");

  const handleCategoryClick = (category) => {
    videoDispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
  };

  return (
    <>
      <header className={`${styles.banner} flex-row flex-center`}>
        <section className="mx-2 flex-column items-center">
          <h1 className={`${styles.heading} mb-4`}>
            View quality reviews for your headphones.
          </h1>
          <Link
            to="/explore"
            className={`${styles.cta} py-2 px-4 text-sm transition-2 rounded-sm icon-container font-bold mt-1`}
          >
            Explore videos{" "}
            <span className="material-icons-outlined transition-3">
              navigate_next
            </span>
          </Link>
        </section>
      </header>
      <div className="mb-4 px-3">
        <h2 className="text-lg my-2">Categories</h2>
        <section className={`${styles.categories} mt-1`}>
          {categories?.length ? (
            categories.map(({ _id, categoryName, categoryURL }) => (
              <Link
                key={_id}
                to="/explore"
                onClick={() => handleCategoryClick(categoryName)}
                className={`${styles.category} border relative rounded-sm cursor-pointer`}
              >
                <img
                  src={categoryURL}
                  alt="categoryName"
                  className="rounded-sm"
                />
                <div
                  className={`${styles.category__name} font-semibold p-1 rounded-sm`}
                >
                  {categoryName}
                </div>
              </Link>
            ))
          ) : (
            <h4 className={`${styles.loader__message} text-center py-6`}>
              Loading...
            </h4>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};
