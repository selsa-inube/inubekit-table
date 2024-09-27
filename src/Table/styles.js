import styled from "styled-components";
import { tokens } from "./Tokens/tokens";

const StyledTable = styled.table`
  border-collapse: ${({ $borderCollapse }) => $borderCollapse};
  table-layout: ${({ $tableLayout }) => $tableLayout};
  width: 100%;
  & > tfoot > tr {
    border: none;
  }
`;

const StyledTableContainer = styled.div`
  border: ${({ $borderWidth, $borderStyle, theme }) =>
    `${$borderWidth} ${$borderStyle} ${
      theme?.table?.border?.color || tokens.border.color
    }`};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

export { StyledTable, StyledTableContainer };
