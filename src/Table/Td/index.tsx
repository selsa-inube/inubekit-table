import React from "react";

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const Td = ({ children, ...props }: TdProps) => {
  return <td {...props}>{children}</td>;
};

export { Td };
