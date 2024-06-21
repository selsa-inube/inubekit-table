import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTh = styled.th`
  background-color: ${({ theme, $action }) =>
    $action
      ? theme?.table?.action?.background?.action ||
        inube.table.action.background.action
      : theme?.table?.heading?.background.regular ||
        inube.table.heading.background.regular};
  padding: 16px;
  text-align: ${({ $align }) => $align || "center"};
  & > p {
    color: ${({ theme }) =>
      theme?.table?.heading?.color || inube.table.heading.color};
  }
`;

export { StyledTh };
