import axios from "axios";
import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useVideo } from "../../contexts";
import { useAuthForm, useScrollToTop, useDocumentTitle } from "../../hooks";
import { signupErrorReducer, signUpErrorInitialState } from "../../reducers";
import { validateSignupForm } from "../../utils";
import { Input } from "../../components";

export const Signup = () => {
  const { loading, showPassword, credentials, authFormDispatch } = useAuthForm({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [errorState, errorDispatch] = useReducer(
    signupErrorReducer,
    signUpErrorInitialState
  );

  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const { videoDispatch } = useVideo();

  useScrollToTop();
  useDocumentTitle("Signup");

  const handleInputChange = (event, field) => {
    authFormDispatch({
      type: "SET_CREDENTIALS",
      payload: { field, value: event.target.value },
    });
  };

  const handleToggleShowPassword = () => {
    authFormDispatch({
      type: "SET_SHOW_PASSWORD",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isValidForm = validateSignupForm(errorDispatch, credentials);
    if (isValidForm) {
      authFormDispatch({ type: "SET_LOADING", payload: true });
      errorDispatch({ type: "SET_SIGNUP_FORM_ERROR", payload: "" });
      try {
        const {
          data: { createdUser, encodedToken },
        } = await axios.post("/api/auth/signup", credentials);

        updateUser(createdUser);

        localStorage.setItem("token", encodedToken);
        errorDispatch({ type: "CLEAR_SIGNUP_FORM" });
        authFormDispatch({ type: "SET_LOADING", payload: false });
        navigate("/");
      } catch (error) {
        errorDispatch({
          type: "SET_SIGNUP_FORM_ERROR",
          payload:
            error.response.status === 422
              ? "Email already exist."
              : "Something is wrong, please try later.",
        });
        authFormDispatch({ type: "SET_LOADING", payload: false });
      }
    }
  };

  return (
    <div className="w-100 flex-row content-center">
      <form
        onSubmit={handleFormSubmit}
        className="signup-form w-100 py-2 px-4 m-2 card-shadow rounded-sm"
      >
        <h3 className="text-center mt-2 mb-3">Signup</h3>

        <Input
          id="fullName"
          type="text"
          title="Full Name"
          placeholder="Enter your full name"
          value={credentials.fullName}
          error={errorState.fullName}
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_FULLNAME_ERROR", payload: "" })
          }
        />

        <Input
          id="email"
          type="email"
          title="Email address"
          placeholder="Enter your email"
          value={credentials.email}
          error={errorState.email}
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_EMAIL_ERROR", payload: "" })
          }
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            error={errorState.password}
            placeholder="Enter your password"
            updateValue={handleInputChange}
            handleOnFocus={() =>
              errorDispatch({ type: "SET_SIGNUP_PASSWORD_ERROR", payload: "" })
            }
          />
          {
            <span
              onClick={handleToggleShowPassword}
              className="material-icons-outlined cursor-pointer visibility-icon"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          }
        </div>

        <Input
          id="confirmPassword"
          type="password"
          title="Confirm Password"
          value={credentials.confirmPassword}
          error={errorState.confirmPassword}
          placeholder="Re-enter your password"
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({
              type: "SET_SIGNUP_CONFIRM_PASSWORD_ERROR",
              payload: "",
            })
          }
        />

        <button
          disabled={loading}
          className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm"
        >
          {loading ? "Signup..." : "Signup"}
        </button>

        {errorState.formError && (
          <div className="mb-2 login-error-msg flex-row items-center text-sm">
            <span className="material-icons-outlined mr-1">error_outline</span>
            <p>{errorState.formError}</p>
          </div>
        )}

        <div className="text-sm mb-2 flex-row flex-center">
          Already a user?
          <Link
            to="/login"
            className="font-semibold text-sm flex-row flex-center ml-1"
          >
            Login
            <span className="material-icons-outlined redirect-icon">
              arrow_right
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
