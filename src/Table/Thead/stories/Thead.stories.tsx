import { Th } from "../../Th";
import { IThead, Thead } from "..";
import { Tr } from "../../Tr";

const story = {
  title: "data/Table/Thead",
  component: Thead,
};

const Default = (args: IThead) => <Thead {...args} />;
Default.args = {
  children: (
    <Tr>
      <Th>Header 1</Th>
      <Th>Header 2</Th>
      <Th>Header 3</Th>
    </Tr>
  ),
};

export default story;
export { Default };
