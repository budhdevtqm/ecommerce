"use client";
import React, { useState } from "react";
import { UserValues } from "@/app/redux/userSlice";
import Wrapper from "@/components/Wrapper";
import { FormHeader } from "@/components/FormHeader";
import { userRoles } from "@/common-utils/common-vars";
import Button from "@/components/Button";



const UpdateUserForm: React.FC = () => {
  const [formValues, setFormValues] = useState<UserValues>({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create-user-values", formValues);
  };

  return (
    <Wrapper>
      <div className="flex items-center justify-center p-4">
        <div className="w-[45%] p-2 border-t-4 border-primary rounded-lg shadow-lg bg-white">
          <FormHeader title="Update User" navigate="/users" />
          <div className="w-[70%] mx-auto my-4">
            <form onSubmit={handleSubmit}>
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
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500 ">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email!"
                  className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
                  onChange={handleChange}
                  value={formValues.email}
                />
                <p className="text-red-500 text-[12px] ml-2">Error</p>
              </div>
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Your password!"
                  className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
                  onChange={handleChange}
                  value={formValues.password}
                />
                <p className="text-red-500 text-[12px] ml-2">Error</p>
              </div>
              <div className="flex flex-col gap-1 my-3">
                <label className="ml-1 text-gray-500">Permission</label>
                <select
                  name="role"
                  className="border-2 py-1 px-2 outline-primary text-black rounded-lg"
                  value={formValues.role}
                  onChange={handleSelectChange}
                >
                  <option value="">None</option>
                  {userRoles.map((type: string, index) => (
                    <option key={index}>{type}</option>
                  ))}
                </select>
                <p className="text-red-500 text-[12px] ml-2">Error</p>
              </div>
              <div className="my-4 flex items-center justify-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UpdateUserForm;
