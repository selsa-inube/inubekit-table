interface IDataItem {
  [key: string]: {
    value: React.ReactNode;
    type?: IActionType;
    checked?: boolean;
    onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLTableCellElement>) => void;
  };
}

const actionType = ["text", "toggle", "icon", "custom"] as const;
type IActionType = (typeof actionType)[number];

const alignContent = ["center", "left", "right"] as const;
type ITableAlignContent = (typeof alignContent)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
    },
  },
};

const props = {
  caption: {
    description: "A string to set the caption of the table.",
    control: { type: "text" },
  },
  columns: {
    description:
      "(Array[objects]): Defines the columns of the table, each object contains the span and optional styles.",
    control: { type: "object" },
  },
  headers: {
    description:
      "(Array[objects]): Defines the headers of the table, each object contains the label, key, and optional action.",
    control: { type: "object" },
  },
  pageLength: {
    description: "(number): The number of entries to display per page.",
    control: { type: "number" },
  },
  align: {
    description:
      "(string): Alignment of content in the table cells. Can be 'center', 'left', or 'right'.",
    control: { type: "select", options: ["center", "left", "right"] },
  },
  data: {
    description: "(Array[objects]): The data to display in the table.",
    control: { type: "object" },
  },
  onToggle: {
    description:
      "(function): Callback function when a toggle action is performed.",
    action: "onToggle",
  },
  onClick: {
    description: "(function): Callback function when a cell is clicked.",
    action: "onClick",
  },
};

export { parameters, props };
export type { IActionType, ITableAlignContent, IDataItem };
