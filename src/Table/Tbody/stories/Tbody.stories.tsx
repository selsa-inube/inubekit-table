import { ITbody, Tbody } from "../../Tbody";
import { Td } from "../../Td";
import { Tr } from "../../Tr";

const story = {
  title: "data/Table/Tbody",
  component: Tbody,
};

const Default = (args: ITbody) => (
  <table style={{ borderCollapse: "collapse" }}>
    <Tbody {...args} />
  </table>
);
Default.args = {
  children: (
    <>
      <Tr border="bottom">
        <Td>Data 1</Td>
        <Td>Data 2</Td>
        <Td>Data 3</Td>
        <Td>Data 4</Td>
        <Td>Data 5</Td>
      </Tr>
      <Tr border="bottom">
        <Td>Data 1.1</Td>
        <Td>Data 2.1</Td>
        <Td>Data 3.1</Td>
        <Td>Data 4.1</Td>
        <Td>Data 5.1</Td>
      </Tr>
      <Tr border="bottom">
        <Td>Data 1.2</Td>
        <Td>Data 2.2</Td>
        <Td>Data 3.2</Td>
        <Td>Data 4.2</Td>
        <Td>Data 5.2</Td>
      </Tr>
      <Tr border="bottom">
        <Td>Data 1.3</Td>
        <Td>Data 2.3</Td>
        <Td>Data 3.3</Td>
        <Td>Data 4.3</Td>
        <Td>Data 5.3</Td>
      </Tr>
      <Tr border="bottom">
        <Td>Data 1.4</Td>
        <Td>Data 2.4</Td>
        <Td>Data 3.4</Td>
        <Td>Data 4.4</Td>
        <Td>Data 5.4</Td>
      </Tr>
    </>
  ),
};

export { Default };
export default story;
