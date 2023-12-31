import React, { ReactNode } from "react";
import Wrapper from "./Wrapper";
import { FormHeader } from "./FormHeader";

interface FormCardInterface {
  title: string;
  navigate: string;
  children: ReactNode;
}

const FormCard: React.FC<FormCardInterface> = ({
  children,
  title,
  navigate,
}) => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center p-4">
        <div className="w-[45%] p-2 border-t-4 border-primary rounded-lg shadow-lg bg-white">
          <FormHeader title={title} navigate={navigate} />
          <div className="w-[70%] mx-auto my-4">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FormCard;
