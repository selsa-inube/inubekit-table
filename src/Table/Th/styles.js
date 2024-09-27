import styled from "styled-components";
import { tokens } from "../Tokens/tokens";

const StyledTh = styled.th`
  background-color: ${({ theme, $action }) =>
    $action
      ? theme?.table?.action?.background || tokens.action.background
      : theme?.table?.heading?.background || tokens.heading.background};
  padding: 16px;
  text-align-last: ${({ $align }) => $align};
  & > p {
    color: ${({ theme }) =>
      theme?.table?.heading?.color || tokens.heading.color};
  }
`;

export { StyledTh };
