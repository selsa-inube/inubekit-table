import React from "react";

interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

const Tr = ({ children, ...props }: TrProps) => {
  return <tr {...props}>{children}</tr>;
};

export { Tr };
