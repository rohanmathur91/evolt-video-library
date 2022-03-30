import { useReducer } from "react";
import { authFormReducer } from "../reducers";

export const useAuthForm = (initialForm) => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    loading: false,
    showPassword: false,
    credentials: initialForm,
  });

  const handleShowPassword = () => {
    authFormDispatch({
      type: "SET_SHOW_PASSWORD",
    });
  };

  const handleInputChange = (event, field) => {
    authFormDispatch({
      type: "SET_CREDENTIALS",
      payload: { field, value: event.target.value },
    });
  };

  return {
    ...authFormState,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  };
};
