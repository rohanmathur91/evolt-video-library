export const validateSignupForm = (
  errorDispatch,
  { email, fullName, password, confirmPassword }
) => {
  const isFullNameValid = fullName.length >= 2 && /^[a-zA-Z ]*$/.test(fullName);
  const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
  const isPasswordValid =
    password !== "" &&
    /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{6,16}$/.test(password);
  const isConfirmPassword =
    confirmPassword !== "" && password === confirmPassword;

  if (!isFullNameValid) {
    errorDispatch({
      type: "SET_SIGNUP_FULLNAME_ERROR",
      payload: "Please enter valid name",
    });
  }

  if (!isEmailValid) {
    errorDispatch({
      type: "SET_SIGNUP_EMAIL_ERROR",
      payload: "Please enter valid email",
    });
  }

  if (!isPasswordValid) {
    errorDispatch({
      type: "SET_SIGNUP_PASSWORD_ERROR",
      payload:
        "Password should contain atleast 6 characters, atleast, one letter, special character and a number",
    });
  }

  if (!isConfirmPassword) {
    errorDispatch({
      type: "SET_SIGNUP_CONFIRM_PASSWORD_ERROR",
      payload: "Password does not match",
    });
  }

  return (
    isFullNameValid && isEmailValid && isPasswordValid && isConfirmPassword
  );
};
