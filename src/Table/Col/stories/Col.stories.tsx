import { Col, ICol } from "..";

const story = {
  title: "components/Table/Col",
  component: Col,
};

const Default = (args: ICol) => <Col {...args} />;
Default.args = {
  span: 1,
  style: { backgroundColor: "lightgrey" },
};

export { Default };
export default story;
