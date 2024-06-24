import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const getBorderStyle = (borderDashed, theme) => {
  const color = theme?.table?.border?.color || inube.table.border.color;
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
      ? theme?.table?.row?.background?.zebra || inube.table.row.background.zebra
      : theme?.table?.row?.background?.regular ||
        inube.table.row.background.regular};
  & > td {
    background-color: ${({ $zebra }) => $zebra && "unset"};
  }
`;

export { StyledTr };
