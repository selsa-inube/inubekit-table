const tableLayouts = ["auto", "fixed"] as const;
type ITableLayout = (typeof tableLayouts)[number];

const borderCollapses = ["collapse", "separate"] as const;
type ITableBorderCollapse = (typeof borderCollapses)[number];

const borderStyles = ["solid", "dashed"] as const;
type ITableBorderStyle = (typeof borderStyles)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A versatile table component, which allows you to customize the layout, borders, and children.",
    },
  },
};

const props = {
  tableLayout: {
    description: "Specifies the layout algorithm to be used for the table.",
    control: { type: "select", options: tableLayouts },
  },
  borderCollapse: {
    description: "Controls the table's border collapse behavior.",
    control: { type: "select", options: borderCollapses },
  },
  borderWidth: {
    description: "Defines the width of the table border.",
    control: { type: "text" },
  },
  borderStyle: {
    description: "Defines the style of the table border.",
    control: { type: "select", options: borderStyles },
  },
  children: {
    description: "The content to display inside the table.",
    control: { type: "object" },
  },
};

export { parameters, props };
export type { ITableLayout, ITableBorderCollapse, ITableBorderStyle };
