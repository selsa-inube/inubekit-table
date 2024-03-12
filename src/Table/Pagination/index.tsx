import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";

interface IPagination {
  firstEntryInPage: number;
  lastEntryInPage: number;
  totalRecords: number;
  handleStartPage: () => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleEndPage: () => void;
}

const Pagination = (props: IPagination) => {
  const {
    firstEntryInPage,
    lastEntryInPage,
    totalRecords,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;

  const interceptHandleStartPage = () => {
    try {
      handleStartPage && handleStartPage();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const interceptHandlePrevPage = () => {
    try {
      handlePrevPage && handlePrevPage();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const interceptHandleNextPage = () => {
    try {
      handleNextPage && handleNextPage();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const interceptHandleEndPage = () => {
    try {
      handleEndPage && handleEndPage();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <Stack justifyContent="flex-end" alignItems="center">
      <Text
        type="body"
        size="small"
        padding="16px 0px"
        appearance="dark"
        textAlign="start"
      >
        {firstEntryInPage + 1} - {lastEntryInPage} of {totalRecords}
      </Text>

      <Stack
        alignItems="center"
        padding="s0 s300"
        margin="s0 s0 s0 s200"
        gap="8px"
      >
        <Icon
          cursorHover={true}
          appearance={"dark"}
          icon={<MdFirstPage />}
          onClick={interceptHandleStartPage}
        />
        <Icon
          cursorHover={true}
          appearance={"dark"}
          icon={<MdNavigateBefore />}
          onClick={interceptHandlePrevPage}
        />
        <Icon
          cursorHover={true}
          appearance={"dark"}
          icon={<MdNavigateNext />}
          onClick={interceptHandleNextPage}
        />
        <Icon
          cursorHover={true}
          appearance={"dark"}
          icon={<MdLastPage />}
          onClick={interceptHandleEndPage}
        />
      </Stack>
    </Stack>
  );
};

export { Pagination };
export type { IPagination };
