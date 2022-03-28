import React from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const { categories, videoDispatch } = useVideo();

  const handleCategoryClick = (categoryName) => {
    navigate("/explore");
    videoDispatch({
      type: "SET_CURRENT_CATEGORY",
      payload: categoryName,
    });
  };

  return (
    <>
      <header className={`${styles.header}`}>
        <img src="https://i.ytimg.com/vi/bInJjmH31Hk/hq720.jpg" alt="banner" />
      </header>
      <section className="mb-4 px-3">
        <h2 className="text-lg my-2">Categories</h2>
        <div className={`${styles.categories} flex-row wrap`}>
          {categories.map(({ _id, categoryName }) => (
            <p
              key={_id}
              onClick={() => handleCategoryClick(categoryName)}
              className={`${styles.category} px-3 py-7 cursor-pointer font-semibold rounded-sm text-center`}
            >
              {categoryName}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};
