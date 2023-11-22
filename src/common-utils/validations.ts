import { LoginValues, SignupValues } from "@/app/redux/authSlice";
import { emailRegex, passwordRegex } from "./common-vars";
import { UserValues } from "@/app/redux/userSlice";

export const validateSignup = (values: SignupValues) => {
  const { name, email, password } = values;
  let errors: Partial<SignupValues> = {};

  if (!name || name.trim() === "") {
    errors.name = "Please enter name!";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be of 3 chars!";
  }

  if (!email || email.trim() === "") {
    errors.email = "Please enter email!";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email pattern!";
  }

  if (!password || password.trim() === "") {
    errors.password = "Please enter password!";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Please enter a password at least of 8, (lowercase, uppercase, number and special) chars!";
  }
  return errors;
};

export const validateLogin = (values: LoginValues) => {
  const { email, password } = values;
  let errors: Partial<LoginValues> = {};

  if (!email || email.trim() === "") {
    errors.email = "Please enter email!";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email pattern!";
  }

  if (!password || password.trim() === "") {
    errors.password = "Please enter password!";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Please enter a password at least of 8, (lowercase, uppercase, number and special) chars!";
  }
  return errors;
};

export const validateUser = (values: UserValues) => {
  const { name, email, password, role } = values;
  const errors: Partial<UserValues> = {};

  if (!role || role.trim() === "") {
    errors.role = "Please select  permissions!";
  }

  if (!name || name.trim() === "") {
    errors.name = "Please enter name!";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be of 3 chars!";
  }

  if (!email || email.trim() === "") {
    errors.email = "Please enter email!";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email pattern!";
  }

  if (!password || password.trim() === "") {
    errors.password = "Please enter password!";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Please enter a password at least of 8, (lowercase, uppercase, number and special) chars!";
  }
  return errors;
};
