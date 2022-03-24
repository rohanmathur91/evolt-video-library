import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Reviews",
  },
  {
    _id: uuid(),
    categoryName: "Podcast",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
  },
  {
    _id: uuid(),
    categoryName: "Unboxing",
  },
];
