import React from "react";
import { StyledCaption } from "./styles";

interface ICaption extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}

const Caption = ({ children, ...props }: ICaption) => {
  return <StyledCaption {...props}>{children}</StyledCaption>;
};

export { Caption };
export type { ICaption };
