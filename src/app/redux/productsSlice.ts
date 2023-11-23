import { createSlice } from "@reduxjs/toolkit";

export interface File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface ProductValues {
  name: string;
  price: string;
  quantity: string;
  category: string;
  description: string;
  images: Array<File> | [] | string;
}
