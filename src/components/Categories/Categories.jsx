import React from "react";
import { useVideo } from "../../contexts";
import styles from "./Categories.module.css";

export const Categories = () => {
  const { categories } = useVideo();

  return (
    <div className="mb-2 mt-3 px-1 flex-row wrap">
      {categories.map(({ _id, categoryName }) => (
        <span
          key={_id}
          className={`${styles.chip} border py-1 px-2 rounded-full text-sm cursor-pointer`}
        >
          {categoryName}
        </span>
      ))}
    </div>
  );
};
