"use client";
import React, { useState } from "react";
import FormCard from "@/app/components/FormCard";
import Button from "@/app/components/Button";
import FileCard from "../FileCard";
import { ProductValues, File } from "@/app/redux/productsSlice";
import { validateProduct } from "@/app/common-utils/validations";
import FormError from "@/app/components/FormError";

const categoreis = [
  {
    _id: 1,
    name: "Electronics",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
  {
    _id: 1,
    name: "Mobiles",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Shirts",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Jeans",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Watches",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
  {
    _id: 1,
    name: "Shoes",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
];

const values = {
  name: "",
  price: "",
  quantity: "",
  category: "",
  description: "",
  images: [],
};

const AddProduct = () => {
  const [files, setFiles] = useState<File[] | []>([]);
  const [formValues, setFormValues] = useState<ProductValues>(values);
  const [errors, setErrors] = useState<Partial<ProductValues>>(values);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    const updatedValues = Object.assign([], selectedFiles);
    setFiles(updatedValues);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResults = validateProduct({ ...formValues, images: files });
    if (Object.keys(validationResults).length > 0) {
      setErrors(validationResults);
      return;
    }

    console.log("Create-Product-no-er");
  };
  return (
    <FormCard title="Add Product" navigate="/products">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            placeholder="product name!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.name}
          />
          <FormError message={errors.name || ""} />
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Price</label>
          <input
            type="number"
            name="price"
            placeholder="product price!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.price}
          />
          <FormError message={errors.price || ""} />
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="product quantity!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.quantity}
          />
          <FormError message={errors.quantity || ""} />
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500">Category</label>
          <select
            name="category"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            value={formValues.category}
            onChange={handleSelectChange}
          >
            <option value="">None</option>
            {categoreis.map((c, index) => (
              <option key={index} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          <FormError message={errors.category || ""} />
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500">Description</label>
          <textarea
            name="description"
            id=""
            cols={30}
            rows={3}
            value={formValues.description}
            placeholder="Please enter product description...."
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
          ></textarea>
          <FormError message={errors.description || ""} />
        </div>

        <div className="flex flex-col  w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Only Image Files
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>

          <FormError message={(errors.images as string) || ("" as string)} />
        </div>
        {files.length > 0 && (
          <div className="grid grid-rows-1 grid-cols-4 my-4 gap-4">
            {Object.values(files).map((file, index) => (
              <FileCard name={file?.name as string} />
            ))}
          </div>
        )}
        <div className="my-4 flex items-center justify-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </FormCard>
  );
};

export default AddProduct;
