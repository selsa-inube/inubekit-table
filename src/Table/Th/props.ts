const alignContent = ["center", "left", "right"] as const;
type IThAlignContent = (typeof alignContent)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
    },
  },
};

const props = {
  action: {
    control: {
      type: "boolean",
    },
    description:
      "Use this prop to add an action to the **Table Th Component**.",
  },
  align: {
    options: alignContent,
    control: {
      type: "select",
    },
    description: "Aligns the content of the **Table Th Component**.",
  },
  children: {
    description: "Content to be rendered inside the **Table Th Component**.",
  },
};

export { props, parameters };
export type { IThAlignContent };
