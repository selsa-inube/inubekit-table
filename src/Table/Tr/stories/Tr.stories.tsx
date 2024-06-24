import { Td } from "../../Td";
import { ITr, Tr } from "..";
import { parameters, props } from "../props";

const story = {
  title: "data/Table/Tr",
  component: Tr,
  parameters,
  argTypes: props,
};

const Default = (args: ITr) => (
  <table style={{ borderCollapse: "collapse" }}>
    <Tr {...args} />
  </table>
);
Default.args = {
  border: "complete",
  borderDashed: false,
  zebra: false,
  children: (
    <>
      <Td>Cell 1</Td>
      <Td>Cell 2</Td>
      <Td>Cell 3</Td>
    </>
  ),
};

export default story;
export { Default };
