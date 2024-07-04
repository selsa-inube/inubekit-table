import { parameters, props as tableProps } from "../props";
import { ITableControllerProps, TableController } from "./Table.Controller";

const story = {
  title: "data/Table",
  component: TableController,
  parameters,
  argTypes: tableProps,
};

const Default = (args: ITableControllerProps) => <TableController {...args} />;

Default.args = {
  tableLayout: "fixed",
  borderCollapse: "collapse",
  borderWidth: "1px",
  borderStyle: "solid",
};

export { Default };
export default story;
