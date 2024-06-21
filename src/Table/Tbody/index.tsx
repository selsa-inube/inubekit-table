import React from "react";
import { StyledTbody } from "./styles";

interface ITbody extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tbody = ({ children, ...props }: ITbody) => {
  return <StyledTbody {...props}>{children}</StyledTbody>;
};

export { Tbody };
export type { ITbody };
