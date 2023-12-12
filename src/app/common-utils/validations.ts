import { LoginValues, SignupValues } from "@/app/redux/authSlice";
import { emailRegex, passwordRegex } from "./common-vars";
import { UserValues, ProfileValidation } from "@/app/redux/userSlice";
import { CategoryValues } from "@/app/redux/categorySlice";
import { ProductValues } from "@/app/redux/productSlice";

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

export const validateCategory = (values: CategoryValues) => {
  const { name } = values;
  const errors: Partial<CategoryValues> = {};

  if (!name || name.trim() === "") {
    errors.name = "Please enter name!";
  } else if (name.trim().length < 3) {
    errors.name = "Name must of 3 chars!";
  }
  return errors;
};

export const validateProduct = (values: ProductValues, mode = "create") => {
  const { name, price, quantity, category, description, images } = values;
  const errors: Partial<ProductValues> = {};

  if (!name || name.trim() === "") {
    errors.name = "Please enter name!";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be of 3 chars!";
  }

  if (!(price as string)) {
    errors.price = "Please enter price!";
  } else if (Number(price) < 1) {
    errors.price = "Please enter valid price!";
  }

  if (!(quantity as string) || (quantity as string).trim() === "") {
    errors.quantity = "Please enter quantity!";
  } else if (Number(quantity) < 1) {
    errors.quantity = "Please enter valid quantity!";
  }

  if (!category || category.trim() === "") {
    errors.category = "Please enter category!";
  } else if (category.trim().length < 3) {
    errors.category = "Category must of 3 chars!";
  }

  if (!description || description.trim() === "") {
    errors.description = "Please enter the description!";
  } else if (description.trim().length < 20) {
    errors.description = "Please enter a valid description!";
  }

  if (mode === "create") {
    if (!images || images.length === 0) {
      errors.images = "Please add product images!";
    }
  }

  return errors;
};

export const validateUserProfileForm = (values: ProfileValidation) => {
  const { name, password } = values;
  const errors: Partial<ProfileValidation> = {};

  if (!name || name.trim() === "") {
    errors.name = "Please enter name!";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be of 3 chars!";
  }

  if (!password || password.trim() === "") {
    errors.password = "Please enter password!";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Please enter a password at least of 8, (lowercase, uppercase, number and special) chars!";
  }

  return errors;
};
