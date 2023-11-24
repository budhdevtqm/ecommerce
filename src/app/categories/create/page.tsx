"use client";
import React, { useState } from "react";
import FormCard from "@/app/components/FormCard";
import Button from "@/app/components/Button";
import FormError from "@/app/components/FormError";
import { CategoryValues } from "@/app/redux/categorySlice";
import { validateCategory } from "@/app/common-utils/validations";

const CreateCategory: React.FC = () => {
  const [formValues, setFormValues] = useState<CategoryValues>({ name: "" });
  const [errors, setErrors] = useState<Partial<CategoryValues>>({ name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResults = validateCategory(formValues);
    if (Object.keys(validationResults).length > 0) {
      setErrors(validationResults);
      return;
    }
    console.log("add-cat-no err");
  };
  return (
    <FormCard title="Create Category" navigate="/categories">
      <form onSubmit={handleSubmit}> 
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Category name!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.name}
          />
          <FormError message={errors.name ?? ""} />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </FormCard>
  );
};

export default CreateCategory;
