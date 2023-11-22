import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { UserInterface } from "../redux/userSlice";

interface UserModelProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  user: UserInterface;
}

const User: React.FC<UserModelProps> = ({ open, setOpen, user }) => {
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <div className="min-w-[40vw]">
        <div className="px-4 flex items-center justify-between">
          <h1 className="font-medium text-blue-500" title="Name">
            {user.name}
          </h1>
          <span className="flex">
            <h3 className="p-1 px-2 border text-primary font-medium uppercase border-primary rounded-2xl">
              {user.role}
            </h3>
          </span>
        </div>
        <div >

        </div>
      </div>
    </Modal>
  );
};

export default User;
