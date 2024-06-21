import { IThead, Thead } from "..";

const story = {
  title: "components/Table/Thead",
  component: Thead,
};

const Default = (args: IThead) => <Thead {...args} />;
Default.args = {
  children: (
    <>
      <Thead>Header 1</Thead>
      <Thead>Header 2</Thead>
      <Thead>Header 3</Thead>
    </>
  ),
};

export default story;
