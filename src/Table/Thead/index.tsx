import React from "react";
import { Tr } from "../Tr";
import { StyledThead } from "./styles";

interface IThead extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Thead = ({ children, ...props }: IThead) => {
  return (
    <StyledThead {...props}>
      <Tr>{children}</Tr>
    </StyledThead>
  );
};

export { Thead };
export type { IThead };
