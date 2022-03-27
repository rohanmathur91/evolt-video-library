import React from "react";
import { Sidebar, SingleVideo } from "../../components";

export const Video = () => {
  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 px-2">
        <SingleVideo />
      </div>
    </div>
  );
};
