"use client";
import React, { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import Button from "./Button";
import AddressForm from "./AddressForm";
import useFetch from "../custom-hooks/useFetch";
import {
  getMyAddresses,
  AddressTypes,
  setAddressId,
  deleteAddress,
} from "../redux/homeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import useDelete from "../custom-hooks/useDelete";
import { Toaster } from "react-hot-toast";

const first = {
  id: 1,
  full_name: "Developer",
  apartment: "616",
  area: "GH3 Housing Board, Sector 31",
  city: "Panchkula",
  state: "Haryana",
  pin: 134109,
};

interface AddressProps {
  addresses: AddressTypes[] | [];
}

const Address: React.FC<AddressProps> = ({ addresses }) => {
  const [allAddress, setAllAddress] = useState<AddressTypes[] | []>([]);
  const [address, setAddress] = useState<AddressTypes | null>(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [change, setChange] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const deleteHandler = useDelete();
  const { handleFetch } = useFetch();

  const handleSelectAddress = (id: number) => {
    const targetIndex = allAddress.findIndex((address) => address.id === id);
    const modifiedTarget = { ...allAddress[targetIndex], checked: true };
    const modified = allAddress.map((address) => ({
      ...address,
      checked: false,
    }));
    modified.splice(targetIndex, 1, modifiedTarget);
    setAllAddress(modified);
    setAddress(modifiedTarget);
    dispatch(setAddressId(id));
  };

  const addAddress = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMode("create");
    dispatch(setAddressId(null));
  };

  const updateAddress = (id: number) => {
    setMode("update");
    setOpen(true);
    dispatch(setAddressId(id));
  };

  const handleDelete = async (id: number) => {
    await deleteHandler(deleteAddress, id);
    await handleFetch(getMyAddresses);
  };

  useEffect(() => {
    if (addresses.length > 0) {
      const latest = { ...addresses[0], checked: true };
      const addressesCopy = [...addresses];
      addressesCopy.splice(0, 1, latest);
      setAddress(latest);
      dispatch(setAddressId(latest.id));
      setAllAddress(addressesCopy);
      return;
    } else setAddress(null);
  }, [addresses]);

  useEffect(() => {
    setMode("create");
    dispatch(setAddressId(null));
  }, []);

  return (
    <React.Fragment>
      {open && (
        <AddressForm
          open={open}
          onClose={handleClose}
          mode={mode}
          setOpen={setOpen}
        />
      )}
      <div className="flex flex-col p-8 bg-white shadow-lg">
        <div className="flex justify-between">
          <div className="my-2">
            <h1 className="font-bold text-[20px]">1. Delivery address</h1>
          </div>
          {address && (
            <div className="flex flex-col text-[15px] my-2">
              <p>{address?.name},</p>
              <p>{address?.apartment},</p>
              <p>{address?.area},</p>
              <p>{`${address?.city}, ${address?.state} ${address?.pin}`}</p>
            </div>
          )}
          <div className="my-2">
            <button
              onClick={() => setChange(!change)}
              className="text-blue-500 w-[100px]"
            >
              {change ? "Close" : "Change"}
            </button>
          </div>
        </div>
        {change && (
          <div>
            <div className="my-1">
              <h5 className="font-semibold px-4 py-1">Your Addresses</h5>
            </div>
            <div className="px-8">
              {allAddress.length > 0 &&
                allAddress.map((address) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    handleSelectAddress={handleSelectAddress}
                    updateAddress={updateAddress}
                    handleDelete={handleDelete}
                  />
                ))}
              <div className="my-3">
                <Button onClick={addAddress} variant="primary">
                  Add address
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </React.Fragment>
  );
};

export default Address;
