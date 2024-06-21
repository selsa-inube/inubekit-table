import { Caption, ICaption } from "..";

const story = {
  title: "components/Table/Caption",
  component: Caption,
};

const Default = (args: ICaption) => <Caption {...args} />;
Default.args = {
  children: "Table Caption",
};

export { Default };
export default story;
