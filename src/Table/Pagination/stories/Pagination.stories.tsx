import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";

import { PaginationController } from "./PaginationController";
import { Pagination } from "..";
import { props, parameters } from "../../props";
import { ITableProps } from "../..";

const story = {
  title: "data/Table/Pagination",
  component: Pagination,
  parameters,
  argTypes: props,
};

export const Default = (args: ITableProps) => (
  <PaginationController {...args} />
);

Default.args = {
  entries: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  pageLength: 5,
};

const theme = structuredClone(presente);

export const Themed = (args: ITableProps) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
