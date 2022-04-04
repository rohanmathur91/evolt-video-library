import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader flex-row flex-center">
      <CircularProgress />
    </div>
  );
};
