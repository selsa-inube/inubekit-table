import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTh = styled.th`
  background-color: ${({ theme, $action }) =>
    $action
      ? theme?.table?.action?.background || inube.table.action.background
      : theme?.table?.heading?.background || inube.table.heading.background};
  padding: 16px;
  text-align-last: ${({ $align }) => $align};
  & > p {
    color: ${({ theme }) =>
      theme?.table?.heading?.color || inube.table.heading.color};
  }
`;

export { StyledTh };
