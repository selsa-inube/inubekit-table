import React from "react";
import { StyledTr } from "./styles";

interface ITr extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

const Tr = ({ children, ...props }: ITr) => {
  return <StyledTr {...props}>{children}</StyledTr>;
};

export { Tr };
export type { ITr };
