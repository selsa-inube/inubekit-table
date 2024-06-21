import React from "react";
import { StyledCol } from "./styles";

interface ICol extends React.ColHTMLAttributes<HTMLTableColElement> {}

const Col = (props: ICol) => {
  return <StyledCol {...props} />;
};

export { Col };
export type { ICol };
