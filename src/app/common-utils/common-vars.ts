interface Header {
  headers: { authorization: string };
}

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : "";

export const userRoles = ["customer", "seller", "admin"];

export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const headerConfig: Header = {
  headers: { authorization: token as string },
};