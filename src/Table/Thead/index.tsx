import React from "react";
import { Tr } from "../Tr";

interface TheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Thead = ({ children, ...props }: TheadProps) => {
  return (
    <thead {...props}>
      <Tr>{children}</Tr>
    </thead>
  );
};

export { Thead };
