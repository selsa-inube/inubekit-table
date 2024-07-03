import React, { useState, useCallback, useEffect } from "react";
import { MdClose, MdLaunch } from "react-icons/md";

import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { props, parameters, IDataItem } from "../props";

import { StyledModal } from "./styles";
import { ITable, Table } from "..";

const story = {
  title: "data/Table",
  component: Table,
  parameters,
  argTypes: props,
};

const LoremModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Blanket>
      <StyledModal>
        <Stack justifyContent="space-between">
          <Text
            as="h3"
            appearance="primary"
            type="title"
            size="large"
            textAlign="start"
          >
            Lorem ipsum
          </Text>
          <MdClose onClick={() => setIsVisible(false)} />
        </Stack>
        <Text textAlign="center" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum.
        </Text>
      </StyledModal>
    </Blanket>
  );
};

const generateData = (
  handleClick: (
    rowIndex: number,
    colIndex: number,
    event: React.MouseEvent<HTMLTableCellElement>,
  ) => void,
  handleToggle: (
    rowIndex: number,
    colIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void,
): IDataItem[] => {
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
        onClick: (e) => handleClick(i, 4, e),
      },
      Data5: {
        value: "Data",
        type: "toggle",
        checked: i % 2 === 0,
        onToggle: (e) => handleToggle(i, 5, e),
      },
    });
  }
  return data;
};

const Default = (args: ITable) => {
  const [data, setData] = useState<IDataItem[]>([]);

  const handleToggle = useCallback(
    (
      rowIndex: number,
      colIndex: number,
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      console.log(
        `Toggle clicked at row ${rowIndex}, col ${colIndex}: ${event.target.checked}`,
      );
      setData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex][args.headers[colIndex].key].checked =
          event.target.checked;
        return newData;
      });
    },
    [args.headers],
  );

  const handleClick = useCallback(
    (rowIndex: number, colIndex: number, event: React.MouseEvent) => {
      console.log(`Cell clicked at row ${rowIndex}, col ${colIndex}`, event);
    },
    [],
  );

  useEffect(() => {
    setData(generateData(handleClick, handleToggle));
  }, [handleClick, handleToggle]);

  return (
    <Table
      {...args}
      data={data}
      onToggle={handleToggle}
      onClick={handleClick}
    />
  );
};

Default.args = {
  caption: "Example Table",
  columns: [{ span: 1 }, { span: 1 }, { span: 1 }],
  headers: [
    { label: "Data", key: "Data" },
    { label: "Data1", key: "Data1" },
    { label: "Data2", key: "Data2" },
    { label: "Data3", key: "Data3" },
    { label: "Data4", key: "Data4", action: true },
    { label: "Data5", key: "Data5", action: true },
  ],
  pageLength: 5,
  modalTitle: "Form",
  infoTitle: "Information",
  content: <LoremModal />,
  align: "center",
};

export { Default };
export default story;
