import React from "react";
import { StyledColGroup } from "./styles";

interface IColgroup extends React.ColgroupHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
}

const Colgroup = (props: IColgroup) => {
  const { children, ...restProps } = props;

  return <StyledColGroup {...restProps}>{children}</StyledColGroup>;
};

export { Colgroup };
export type { IColgroup };
