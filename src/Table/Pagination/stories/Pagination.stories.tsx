import { IPagination, Pagination } from "..";

const story = {
  title: "data/Pagination",
  component: Pagination,
  argTypes: {
    firstEntryInPage: { control: "number" },
    lastEntryInPage: { control: "number" },
    totalRecords: { control: "number" },
    handleStartPage: { action: "startPage" },
    handlePrevPage: { action: "prevPage" },
    handleNextPage: { action: "nextPage" },
    handleEndPage: { action: "endPage" },
  },
};

const Default = (args: IPagination) => <Pagination {...args} />;
Default.args = {
  firstEntryInPage: 0,
  lastEntryInPage: 10,
  totalRecords: 100,
  handleStartPage: () => console.log("Start Page clicked"),
  handlePrevPage: () => console.log("Prev Page clicked"),
  handleNextPage: () => console.log("Next Page clicked"),
  handleEndPage: () => console.log("End Page clicked"),
};

export { Default };
export default story;
