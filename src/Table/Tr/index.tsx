import React from "react";
import { StyledTr } from "./styles";
import { IBorder } from "./props";

interface ITr extends React.HTMLAttributes<HTMLTableRowElement> {
  border?: IBorder;
  borderDashed?: boolean;
  children: React.ReactNode;
  zebra?: boolean;
}

const Tr = (props: ITr) => {
  const {
    border = "complete",
    borderDashed = false,
    children,
    zebra = false,
    ...restProps
  } = props;

  return (
    <StyledTr
      $border={border}
      $borderDashed={borderDashed}
      $zebra={zebra}
      {...restProps}
    >
      {children}
    </StyledTr>
  );
};

export { Tr };
export type { ITr };
