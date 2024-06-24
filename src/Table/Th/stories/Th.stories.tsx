import { ITh, Th } from "..";
import { parameters, props } from "../props";

const story = {
  title: "data/Table/Th",
  component: Th,
  parameters,
  argTypes: props,
};

const Default = (args: ITh) => <Th {...args} />;
Default.args = {
  action: true,
  children: "Header Cell",
};

export { Default };
export default story;
