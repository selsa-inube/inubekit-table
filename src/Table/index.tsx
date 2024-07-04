import React from "react";
import { StyledTable, StyledTableContainer } from "./styles";
import { ITableBorderCollapse, ITableBorderStyle, ITableLayout } from "./props";

interface ITable {
  tableLayout?: ITableLayout;
  borderCollapse?: ITableBorderCollapse;
  borderWidth?: string;
  borderStyle?: ITableBorderStyle;
  children: React.ReactNode;
}

const Table = (props: ITable) => {
  const {
    tableLayout = "fixed",
    borderCollapse = "collapse",
    borderWidth = "1px",
    borderStyle = "solid",
    children,
  } = props;

  return (
    <StyledTableContainer $borderWidth={borderWidth} $borderStyle={borderStyle}>
      <StyledTable $tableLayout={tableLayout} $borderCollapse={borderCollapse}>
        {children}
      </StyledTable>
    </StyledTableContainer>
  );
};

export { Table };
export type { ITable };
