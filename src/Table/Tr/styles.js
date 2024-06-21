import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTr = styled.tr`
  border-bottom: solid 1px;
  height: 40px;

  &:last-child {
    border-bottom: ${({ $entriesLength, $pageLength }) =>
      $entriesLength < $pageLength && "none"};
  }
`;

export { StyledTr };
