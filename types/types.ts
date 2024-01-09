import { ReactNode } from "react";
import { ICountry } from "react-native-international-phone-number";

export interface User {
  id: string;
  name_surname: string;
  city: string;
  companyName: string;
  country: string;
  phone: string;
  email: string;
}
export interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}
export interface AuthProviderProps {
  children: ReactNode;
}
export interface BucketItem {
  id: string;
  name: string;
  img: string;
  count: number;
}
export interface Product {
  id: string;
  name: string;
  image_paths: string[];
  cover_image: string;
  is_reserved: boolean;
  remainingTime: number;
  content: string;
}
export interface FormType {
  email: string;
  name: string;
  message: string;
  phone: string;
  countryCode: ICountry;
}
export interface CountdownProps {
  timeInMilliseconds: number;
}
