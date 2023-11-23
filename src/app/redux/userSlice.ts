export interface UserValues {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  password: string;
  role: string;
  email: string;
}

export interface ProfileValidation {
  name: string;
  email: string;
  password: string;
}

export interface FetchedUser {
  name: string;
  email: string;
  image: string;
  role: string;
  status: boolean;
  createdAt: number;
  updatedAt: number;
  _id: string;
}
