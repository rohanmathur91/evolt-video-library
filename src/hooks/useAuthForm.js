import { useReducer } from "react";
import { authFormReducer } from "../reducers";

export const useAuthForm = (initialForm) => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    loading: false,
    showPassword: false,
    credentials: initialForm,
  });

  return { ...authFormState, authFormDispatch };
};
