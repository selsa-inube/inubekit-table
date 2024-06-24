import React from "react";
import { StyledThead } from "./styles";

interface IThead extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Thead = (props: IThead) => {
  const { children, ...restProps } = props;

  return <StyledThead {...restProps}>{children}</StyledThead>;
};

export { Thead };
export type { IThead };
