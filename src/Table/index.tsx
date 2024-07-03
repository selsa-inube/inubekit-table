import React, { useState } from "react";
import { Caption } from "./Caption";
import { Col } from "./Col";
import { Colgroup } from "./Colgroup";
import { IDataItem, ITableAlignContent } from "./props";
import { Pagination } from "./Pagination";
import { StyledTable, StyledTableContainer } from "./styles";
import { Tbody } from "./Tbody";
import { Td } from "./Td";
import { Tfoot } from "./Tfoot";
import { Th } from "./Th";
import { Thead } from "./Thead";
import { Tr } from "./Tr";

interface ITable {
  align?: ITableAlignContent;
  caption?: string;
  columns: { span: number; style?: React.CSSProperties }[];
  data: IDataItem[];
  headers: { label: string; key: string; action?: boolean }[];
  onClick?: (
    rowIndex: number,
    colIndex: number,
    event: React.MouseEvent,
  ) => void;
  onToggle?: (
    rowIndex: number,
    colIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  pageLength: number;
}

const Table = (props: ITable) => {
  const {
    caption,
    columns,
    headers,
    data,
    pageLength,
    align = "center",
    onToggle,
    onClick,
  } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / pageLength);

  const handleStartPage = () => setCurrentPage(0);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const handleEndPage = () => setCurrentPage(totalPages - 1);

  const firstEntryInPage = currentPage * pageLength;
  const lastEntryInPage = Math.min(firstEntryInPage + pageLength, totalRecords);

  const currentData = data.slice(firstEntryInPage, lastEntryInPage);

  return (
    <>
      <StyledTableContainer>
        <StyledTable>
          <Colgroup>
            {columns.map((col, index) => (
              <Col key={index} span={col.span} style={col.style} />
            ))}
          </Colgroup>
          <Thead>
            <Tr border="bottom">
              {headers.map((header, index) => (
                <Th key={index} action={header.action} align={align}>
                  {header.label}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currentData.map((row, rowIndex) => (
              <Tr key={rowIndex} border="bottom">
                {headers.map((header, colIndex) => {
                  const cellData = row[header.key];
                  return (
                    <Td
                      key={colIndex}
                      type={cellData?.type}
                      checked={cellData?.checked}
                      align={align}
                      onToggle={
                        cellData?.type === "toggle" && onToggle
                          ? (e) => onToggle(rowIndex, colIndex, e)
                          : undefined
                      }
                      onClick={
                        (cellData?.type === "icon" ||
                          cellData?.type === "custom") &&
                        onClick
                          ? (e: React.MouseEvent) =>
                              onClick(rowIndex, colIndex, e)
                          : undefined
                      }
                    >
                      {cellData?.value}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr border="bottom">
              <Td colSpan={headers.length} type="custom" align={align}>
                <Pagination
                  firstEntryInPage={firstEntryInPage}
                  lastEntryInPage={lastEntryInPage}
                  totalRecords={totalRecords}
                  handleStartPage={handleStartPage}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                  handleEndPage={handleEndPage}
                />
              </Td>
            </Tr>
          </Tfoot>
        </StyledTable>
      </StyledTableContainer>
      {caption && <Caption>{caption}</Caption>}
    </>
  );
};

export { Table };
export type { ITable };
