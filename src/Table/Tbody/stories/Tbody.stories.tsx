import { ITbody, Tbody } from "../../Tbody";
import { Td } from "../../Td";
import { Tr } from "../../Tr";

const story = {
  title: "components/Table/Tbody",
  component: Tbody,
};

const Default = (args: ITbody) => <Tbody {...args} />;
Default.args = {
  children: (
    <Tr>
      <Td>Data 1</Td>
      <Td>Data 2</Td>
      <Td>Data 3</Td>
    </Tr>
  ),
};

export { Default };
export default story;
