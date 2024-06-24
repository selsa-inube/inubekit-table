const borders = ["complete", "top", "bottom", "left", "right"] as const;
type IBorder = (typeof borders)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
    },
  },
};

const props = {
  border: {
    options: borders,
    control: {
      type: "select",
    },
    description: "Sets the border of the **Table Tr Component**.",
  },
  borderDashed: {
    control: {
      type: "boolean",
    },
    description: "If true, sets the border style to dashed.",
  },
  zebra: {
    control: {
      type: "boolean",
    },
    description:
      "If true, applies zebra striping to the **Table Tr Component**.",
  },
  children: {
    description: "Content to be rendered inside the **Table Tr Component**.",
  },
};

export { props, parameters };
export type { IBorder };
