'use client'
import React, { useState } from "react";
import FormCard from "@/components/FormCard";
import Button from "@/components/Button";

const UpdateCategory: React.FC = () => {
  const [formValues, setFormValues] = useState({ name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  return (
    <FormCard title="Update Category" navigate="/categories">
      <form>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.name}
          />
          <p className="text-red-500 text-[12px] ml-2">Error</p>
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

export default UpdateCategory;
