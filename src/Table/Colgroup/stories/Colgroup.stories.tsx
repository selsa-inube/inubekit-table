import { Col } from "../../Col";
import { Colgroup, IColgroup } from "..";
import { parameters, props } from "../props";

const story = {
  title: "data/Table/Colgroup",
  component: Colgroup,
  parameters,
  argTypes: props,
};

const Default = (args: IColgroup) => <Colgroup {...args} />;

Default.args = {
  children: (
    <>
      <Col span={1} />
      <Col span={2} />
    </>
  ),
};

export default story;
export { Default };
