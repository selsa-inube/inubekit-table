import React from "react";

interface TbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tbody = ({ children, ...props }: TbodyProps) => {
  return <tbody {...props}>{children}</tbody>;
};

export { Tbody };
