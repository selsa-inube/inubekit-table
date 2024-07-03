const alignContent = ["center", "left", "right"] as const;
type ITdAlignContent = (typeof alignContent)[number];

const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;
type ITdAppearance = (typeof appearances)[number];

const types = ["text", "toggle", "icon", "custom"] as const;
type ITdType = (typeof types)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
    },
  },
};

const props = {
  align: {
    options: alignContent,
    control: {
      type: "select",
    },
    description: "Aligns the content of the **Table Td Component**.",
  },
  appearance: {
    options: appearances,
    control: {
      type: "select",
    },
    description: "Changes the appearance of the **Table Td Component**.",
  },
  children: {
    description: "Content to be rendered inside the **Table Td Component**.",
  },
  onClick: {
    description:
      "Function to be called when the **Table Td Component** is clicked.",
  },
  onToggle: {
    description:
      "Function to be called when the **Table Td Component** is toggled.",
  },
  type: {
    options: types,
    control: {
      type: "select",
    },
    description: "Changes the type of the **Table Td Component**.",
  },
};

export { props, parameters };
export type { ITdAppearance, ITdAlignContent, ITdType };
