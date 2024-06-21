import React from "react";
import { StyledTfoot } from "./styles";

interface ITfoot extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tfoot = ({ children, ...props }: ITfoot) => {
  return <StyledTfoot {...props}>{children}</StyledTfoot>;
};

export { Tfoot };
export type { ITfoot };
