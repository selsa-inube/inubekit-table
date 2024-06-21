import { Col } from "../../Col";
import { Colgroup, IColgroup } from "..";

const story = {
  title: "components/Table/Colgroup",
  component: Colgroup,
};

const Default = (args: IColgroup) => <Colgroup {...args} />;
Default.args = {
  children: (
    <>
      <Col span={1} style={{ backgroundColor: "lightgrey" }} />
      <Col span={1} style={{ backgroundColor: "lightblue" }} />
      <Col span={1} style={{ backgroundColor: "lightgreen" }} />
    </>
  ),
};

export { Default };
export default story;
