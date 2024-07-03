import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTd = styled.td`
  background-color: ${({ theme, $appearance }) =>
    theme?.table?.cell?.background[$appearance] ||
    inube.table.cell.background[$appearance]};
  padding: 16px;
  text-align-last: ${({ $align }) => $align || "center"};
  & > p {
    color: ${({ theme, $appearance }) =>
      theme?.table?.cell?.color[$appearance] ||
      inube.table.cell.color[$appearance]};
  }
`;

const StyledToggleContainer = styled.div`
  & > div {
    justify-content: ${({ $align }) =>
      $align === "right"
        ? "flex-end"
        : $align === "left"
          ? "flex-start"
          : "center"};
  }
`;

export { StyledTd, StyledToggleContainer };
