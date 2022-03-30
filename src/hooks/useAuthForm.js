import { useReducer } from "react";
import { authFormReducer } from "../reducers";

export const useAuthForm = (initialForm) => {
  const [{ loading, showPassword, credentials }, authFormDispatch] = useReducer(
    authFormReducer,
    {
      loading: false,
      showPassword: false,
      credentials: initialForm,
    }
  );

  return { loading, showPassword, credentials, authFormDispatch };
};
