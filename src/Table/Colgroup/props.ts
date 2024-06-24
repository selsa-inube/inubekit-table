const parameters = {
  docs: {
    description: {
      component: "A versatile column group component for table structures.",
    },
  },
};

const props = {
  span: {
    control: {
      type: "number",
    },
    description:
      "Defines the number of columns a `<colgroup>` element should span.",
  },
  children: {
    description: "Content to be rendered inside the **Colgroup** component.",
  },
};

export { props, parameters };
