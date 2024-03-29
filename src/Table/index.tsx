import { useMemo, useState } from "react";
import { Stack } from "@inubekit/stack";

import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { StyledContainer } from "./styles";

interface IActions {
  id: string;
  [key: string]: string;
}

interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => JSX.Element;
}

interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

interface ITableUI {
  titles: ITitle[];
  actions: IAction[];
  entries: IActions[];
  breakpoints: IBreakpoint[];
  content?: React.ReactElement;
  infoTitle: string;
  actionsTitle: string;
}

interface ITable {
  id: string;
  titles: ITitle[];
  actions: IAction[];
  entries: IActions[];
  filter?: string;
  pageLength?: number;
  breakpoints?: IBreakpoint[];
  content?: React.ReactElement;
  infoTitle?: string;
}

const Table = (props: ITable) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    breakpoints,
    content,
    infoTitle,
  } = props;

  const filteredEntries = useMemo(() => {
    const titlesId = titles.map((title) => title.id);

    return entries.filter((entry) => {
      for (const attribute in entry) {
        if (
          titlesId.includes(attribute) &&
          entry[attribute]
            .toString()
            .toLowerCase()
            .includes(filter.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }, [entries, filter, titles]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredEntries.length / pageLength);

  const firstEntryInPage = (currentPage - 1) * pageLength;

  const lastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    filteredEntries.length,
  );

  function getPageEntries() {
    return filteredEntries.slice(firstEntryInPage, lastEntryInPage);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <StyledContainer id={id}>
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entries={getPageEntries()}
          breakpoints={breakpoints!}
          content={content}
          infoTitle={infoTitle!}
          pageLength={pageLength}
        />
        {filteredEntries.length > pageLength && (
          <Pagination
            firstEntryInPage={firstEntryInPage}
            lastEntryInPage={lastEntryInPage}
            totalRecords={filteredEntries.length}
            handleStartPage={goToFirstPage}
            handlePrevPage={prevPage}
            handleNextPage={nextPage}
            handleEndPage={goToEndPage}
          />
        )}
      </Stack>
    </StyledContainer>
  );
};

export { Table };
export type { IActions, IAction, IBreakpoint, ITable, ITableUI, ITitle };
