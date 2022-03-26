import React from "react";
import { useVideo } from "../../contexts";
import styles from "./Categories.module.css";

export const Categories = () => {
  const { categories } = useVideo();

  return (
    <div className="mt-2 px-3 flex-row wrap">
      {categories.map(({ _id, categoryName }) => (
        <span
          key={_id}
          className={`${styles.chip} border py-1 px-2 m-1 rounded-full text-sm cursor-pointer`}
        >
          {categoryName}
        </span>
      ))}
    </div>
  );
};
