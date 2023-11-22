"use client";
import React, { useState } from "react";
import FormCard from "@/components/FormCard";
import Button from "@/components/Button";
import { useParams } from "next/navigation";

const OrderForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    pin: "",
    address: "",
  });

  const { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("order-form-values", formValues);
  };
  return (
    <FormCard title="Order Form" navigate={`/product/${id}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Name</label>
          <input
            type="text"
            name="userName"
            placeholder="User name!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.userName}
          />
          <p className="text-red-500 text-[12px] ml-2">Error</p>
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Email</label>
          <input
            type="text"
            name="email"
            placeholder="User email!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.email}
          />
          <p className="text-red-500 text-[12px] ml-2">Error</p>
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">PIN Code</label>
          <input
            type="text"
            name="pin"
            placeholder="PIN Code!"
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            onChange={handleChange}
            value={formValues.pin}
          />
          <p className="text-red-500 text-[12px] ml-2">Error</p>
        </div>
        <div className="flex flex-col gap-1 my-3">
          <label className="ml-1 text-gray-500 ">Address</label>
          <textarea
            onChange={handleTextareaChange}
            className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
            name="address"
            cols={30}
            rows={2}
          ></textarea>
          <p className="text-red-500 text-[12px] ml-2">Error</p>
        </div>
        <div className="my-4 flex items-center justify-center">
          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </div>
      </form>
    </FormCard>
  );
};

export default OrderForm;
