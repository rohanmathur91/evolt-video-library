import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";

export const Toast = () => {
  return (
    <ToastContainer
      draggable
      pauseOnHover
      closeOnClick
      pauseOnFocusLoss
      rtl={false}
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
    />
  );
};
