/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@inubekit/stack";
import { ITfoot, Tfoot } from "..";
import { PaginationController } from "../../Pagination/stories/PaginationController";

const story = {
  title: "data/Table/Tfoot",
  component: Tfoot,
};

const Default = (args: ITfoot) => <Tfoot {...args} />;
Default.args = {
  children: (
    <Stack justifyContent="flex-end" width="500px">
      <PaginationController
        entries={
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ] as any
        }
        pageLength={5}
        id={""}
        titles={[]}
        actions={[]}
      />
    </Stack>
  ),
};

export default story;
export { Default };
