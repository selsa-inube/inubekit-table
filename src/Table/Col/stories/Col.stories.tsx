import { Col, ICol } from "..";
import { parameters, props } from "../props";

const story = {
  title: "data/Table/Col",
  component: Col,
  parameters,
  argTypes: props,
};

const Default = (args: ICol) => <Col {...args} />;

Default.args = {
  span: 1,
};

export default story;
export { Default };
