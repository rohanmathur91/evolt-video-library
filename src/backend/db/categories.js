import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "New",
    categoryURL: "https://i.ytimg.com/vi/PQBujSUwFk8/hq720.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Unboxing",
    categoryURL: "https://i.ytimg.com/vi/-deneR4S8fI/hq720.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Comparison",
    categoryURL: "https://i.ytimg.com/vi/cRNqVGfy2O4/hq720.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Noise Cancelling",
    categoryURL: "https://i.ytimg.com/vi/cgR57T9Lnao/hq720.jpg",
  },
];
