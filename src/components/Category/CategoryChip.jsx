import React from "react";
import styles from "./CategoryChip.module.css";

export const CategoryChip = ({
  _id,
  categoryName,
  currentCategory,
  handleClick,
}) => {
  return (
    <span
      key={_id}
      onClick={() => handleClick(categoryName)}
      className={`${styles.chip} ${
        currentCategory === categoryName ? styles.active : ""
      } border py-1 px-2 rounded-full text-sm cursor-pointer`}
    >
      {categoryName}
    </span>
  );
};

CategoryChip.defaultProps = {
  _id: "",
  categoryName: "",
  currentCategory: "",
  handleClick: () => {},
};
