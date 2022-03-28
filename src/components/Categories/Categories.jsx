import React from "react";
import { useVideo } from "../../contexts";
import styles from "./Categories.module.css";

export const Categories = () => {
  const { categories, currentCategory, videoDispatch } = useVideo();

  const handleCategoryClick = (category = "") => {
    videoDispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
  };

  return (
    <div className="mb-2 mt-3 px-1 flex-row wrap">
      <span
        onClick={() => handleCategoryClick()}
        className={`${styles.chip} ${
          currentCategory === "" ? styles.active : ""
        } border py-1 px-2 rounded-full text-sm cursor-pointer`}
      >
        All
      </span>
      {categories.map(({ _id, categoryName }) => (
        <span
          key={_id}
          onClick={() => handleCategoryClick(categoryName)}
          className={`${styles.chip} ${
            currentCategory === categoryName ? styles.active : ""
          } border py-1 px-2 rounded-full text-sm cursor-pointer`}
        >
          {categoryName}
        </span>
      ))}
    </div>
  );
};
