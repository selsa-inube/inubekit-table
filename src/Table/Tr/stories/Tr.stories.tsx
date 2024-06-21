import { Td } from "../../Td";
import { ITr, Tr } from "..";

const story = {
  title: "components/Table/Tr",
  component: Tr,
};

const Default = (args: ITr) => <Tr {...args} />;
Default.args = {
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
