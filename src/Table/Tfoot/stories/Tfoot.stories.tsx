import { Tr } from "../../Tr";
import { ITfoot, Tfoot } from "..";
import { Td } from "../../Td";

const story = {
  title: "components/Table/Tfoot",
  component: Tfoot,
};

const Default = (args: ITfoot) => <Tfoot {...args} />;
Default.args = {
  children: (
    <Tr>
      <Td>Footer 1</Td>
      <Td>Footer 2</Td>
      <Td>Footer 3</Td>
    </Tr>
  ),
};

export default story;
export { Default };
