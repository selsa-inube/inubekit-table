import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledTable = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

export const StyledThead = styled.thead`
  border-bottom: solid 1px
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export const StyledTbody = styled.tbody`
  background-color: ${({ theme }) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export const StyledTr = styled.tr`
  border-bottom: solid 1px
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  height: 40px;
`;

export const StyledThTitle = styled.th`
  padding: ${({ theme }) =>
    `${theme?.spacing?.s150} ${theme?.spacing?.s200}` ||
    `${inube.spacing?.s150} ${inube.spacing.s200}`};
`;

export const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  width: 80px;
  padding: ${({ theme }) =>
    `${theme?.spacing?.s150} ${theme?.spacing?.s0}` ||
    `${inube.spacing.s150} ${inube.spacing.s0}`};
`;

export const StyledTd = styled.td`
  padding: ${({ theme }) =>
    `${theme?.spacing?.s0} ${theme?.spacing?.s200}` ||
    `${inube.spacing.s0} ${inube.spacing.s200}`};
  text-align: center;
`;
