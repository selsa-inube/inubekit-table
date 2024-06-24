import { Caption, ICaption } from "..";

const story = {
  title: "data/Table/Caption",
  component: Caption,
};

const Default = (args: ICaption) => <Caption {...args} />;
Default.args = {
  children: "Caption text",
};

export { Default };
export default story;
