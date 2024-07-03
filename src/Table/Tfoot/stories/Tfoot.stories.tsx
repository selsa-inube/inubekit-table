import { Stack } from "@inubekit/stack";
import { ITfoot, Tfoot } from "..";
import { Pagination } from "../../Pagination";

const story = {
  title: "data/Table/Tfoot",
  component: Tfoot,
};

const Default = (args: ITfoot) => <Tfoot {...args} />;
Default.args = {
  children: (
    <Stack justifyContent="flex-end" width="500px">
      <Pagination
        firstEntryInPage={0}
        lastEntryInPage={0}
        totalRecords={0}
        handleStartPage={() => {}}
        handlePrevPage={() => {}}
        handleNextPage={() => {}}
        handleEndPage={() => {}}
      />
    </Stack>
  ),
};

export default story;
export { Default };
