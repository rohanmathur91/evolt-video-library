import React from "react";
import { useScrollToTop } from "../../hooks";
import { Sidebar, SingleVideo } from "../../components";

export const Video = () => {
  useScrollToTop();

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 px-2">
        <SingleVideo />
      </div>
    </div>
  );
};
