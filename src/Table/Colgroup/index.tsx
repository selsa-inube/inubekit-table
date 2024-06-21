import React from "react";
import { StyledColGroup } from "./styles";

interface IColgroup extends React.ColgroupHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
}

const Colgroup = ({ children, ...props }: IColgroup) => {
  return <StyledColGroup {...props}>{children}</StyledColGroup>;
};

export { Colgroup };
export type { IColgroup };
