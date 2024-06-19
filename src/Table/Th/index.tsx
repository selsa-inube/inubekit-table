import React from "react";

interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const Th = ({ children, ...props }: ThProps) => {
  return <th {...props}>{children}</th>;
};

export { Th };
