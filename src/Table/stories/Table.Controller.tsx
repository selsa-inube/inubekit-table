import React, { useState } from "react";
import { Table } from "..";
import { Colgroup } from "../Colgroup";
import { Col } from "../Col";
import { Thead } from "../Thead";
import { Tr } from "../Tr";
import { Th } from "../Th";
import { Tbody } from "../Tbody";
import { Td } from "../Td";
import { Tfoot } from "../Tfoot";
import { Pagination } from "../Pagination";
import { MdLaunch } from "react-icons/md";

interface IDataItem {
  [key: string]: {
    value: React.ReactNode;
    type?: "text" | "toggle" | "icon" | "custom";
    checked?: boolean;
    onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent) => void;
  };
}

interface ITableControllerProps {
  tableLayout?: "auto" | "fixed";
  borderCollapse?: "collapse" | "separate";
  borderWidth?: string;
  borderStyle?: "solid" | "dashed";
}

const TableController = (props: ITableControllerProps) => {
  const { tableLayout, borderCollapse, borderWidth, borderStyle } = props;

  const columns = [{ span: 1 }, { span: 1 }, { span: 1 }];
  const headers = [
    { label: "Data", key: "Data" },
    { label: "Data1", key: "Data1" },
    { label: "Data2", key: "Data2" },
    { label: "Data3", key: "Data3" },
    { label: "Data4", key: "Data4", action: true },
    { label: "Data5", key: "Data5", action: true },
  ];
  const pageLength = 5;

  const generateData = () => {
    const rows = 10;
    const data: IDataItem[] = [];
    for (let i = 0; i < rows; i++) {
      data.push({
        Data: { value: "Data" },
        Data1: { value: "Data" },
        Data2: { value: "Data" },
        Data3: { value: "Data" },
        Data4: {
          value: <MdLaunch />,
          type: i % 3 === 0 ? "icon" : "custom",
          onClick: () => console.log(`Icon clicked at row ${i}, col 4`),
        },
        Data5: {
          value: "Data",
          type: "toggle",
          checked: i % 2 === 0,
          onToggle: () => console.log(`Toggle clicked at row ${i}, col 5`),
        },
      });
    }
    return data;
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [data] = useState<IDataItem[]>(generateData());

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
    <Table
      tableLayout={tableLayout}
      borderCollapse={borderCollapse}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
    >
      <Colgroup>
        {columns.map((col, index) => (
          <Col key={index} span={col.span} />
        ))}
      </Colgroup>
      <Thead>
        <Tr border="bottom">
          {headers.map((header, index) => (
            <Th key={index} action={header.action} align="center">
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
                  type={cellData?.type || "text"}
                  checked={cellData?.checked}
                  align="center"
                  onToggle={
                    cellData?.type === "toggle"
                      ? (e) => cellData.onToggle && cellData.onToggle(e)
                      : undefined
                  }
                  onClick={
                    cellData?.type === "icon" || cellData?.type === "custom"
                      ? (e: React.MouseEvent) =>
                          cellData.onClick && cellData.onClick(e)
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
          <Td colSpan={headers.length} type="custom" align="center">
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
    </Table>
  );
};

export { TableController };
export type { ITableControllerProps, IDataItem };
