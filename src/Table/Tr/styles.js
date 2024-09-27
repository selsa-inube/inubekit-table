import styled from "styled-components";
import { tokens } from "../Tokens/tokens";

const getBorderStyle = (borderDashed, theme) => {
  const color = theme?.table?.border?.color || tokens.border.color;
  const style = borderDashed ? "dashed" : "solid";
  const width = "1px";
  return `${width} ${style} ${color}`;
};

const StyledTr = styled.tr`
  border-top: ${({ $border, $borderDashed, theme }) =>
    $border === "top" || $border === "complete"
      ? getBorderStyle($borderDashed, theme)
      : "none"};
  border-bottom: ${({ $border, $borderDashed, theme }) =>
    $border === "bottom" || $border === "complete"
      ? getBorderStyle($borderDashed, theme)
      : "none"};
  border-left: ${({ $border, $borderDashed, theme }) =>
    $border === "left" || $border === "complete"
      ? getBorderStyle($borderDashed, theme)
      : "none"};
  border-right: ${({ $border, $borderDashed, theme }) =>
    $border === "right" || $border === "complete"
      ? getBorderStyle($borderDashed, theme)
      : "none"};
  height: 48px;
  background-color: ${({ $zebra, theme }) =>
    $zebra
      ? theme?.table?.row?.background?.zebra || tokens.row.background.zebra
      : theme?.table?.row?.background?.regular ||
        tokens.row.background.regular};
  & > td {
    background-color: ${({ $zebra }) => $zebra && "unset"};
  }
`;

export { StyledTr };
