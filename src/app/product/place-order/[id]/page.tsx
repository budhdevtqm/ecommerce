"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "@/app/components/Wrapper";
import Address from "@/app/components/Address";

const OrderForm: React.FC = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <div className="flex gap-4">
        <div className="rounded  w-full flex flex-col gap-4">
          <Address />
          <span className="font-bold">2. Confirm Payment</span>
        </div>
        {/* <div className="border border-gray-500 rounded p-4 bg-white shadow-lg w-[30%] h-fit">
          30%
        </div> */}
      </div>
    </Wrapper>
  );
};

export default OrderForm;

/*
 const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    pin: "",
    address: "",
  });


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



 <div className="flex items-center justify-center p-4">
        <div className="w-[60%] p-2 border-t-4 border-primary rounded-lg shadow-lg bg-white">
          <FormHeader title="Place Order" navigate={`/product/${id}`} />
          <div className="w-[70%] mx-auto my-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500 ">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name!"
                  className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
                  onChange={handleChange}
                  value={formValues.name}
                />
                <p className="text-red-500 text-[12px] ml-2">Error</p>
              </div>
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500 ">Email</label>
                <input
                  type="number"
                  name="mobile"
                  placeholder="mobile number!"
                  className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
                  onChange={handleChange}
                  value={formValues.mobile}
                />
                <p className="text-red-500 text-[12px] ml-2">Error</p>
              </div>
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500 ">PIN Code</label>
                <input
                  type="number"
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
          </div>
        </div>
      </div>


*/
