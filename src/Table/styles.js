import styled from "styled-components";
import { inube } from "@inubekit/foundations";

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
      theme?.table?.border?.color || inube.table.border.color
    }`};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

export { StyledTable, StyledTableContainer };
