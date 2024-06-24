import { ITd, Td } from "..";
import { parameters, props } from "../props";
import { TdController } from "./TdController";

const story = {
  title: "data/Table/Td",
  component: Td,
  parameters,
  argTypes: props,
};

const Default = (args: ITd) => <TdController {...args} />;
Default.args = {
  children: "content",
};

export default story;
export { Default };
