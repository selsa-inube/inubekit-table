import { inube } from "@inubekit/foundations";

const tokens = {
  border: {
    color: inube.palette.neutral.N40,
  },
  heading: {
    background: inube.palette.neutral.N0,
    color: inube.palette.neutral.N900,
  },
  action: {
    background: inube.palette.neutral.N30,
    color: inube.palette.neutral.N900,
  },
  row: {
    background: {
      regular: inube.palette.neutral.N0,
      zebra: inube.palette.neutral.N30,
    },
    color: {
      regular: inube.palette.neutral.N900,
      zebra: inube.palette.neutral.N900,
    },
  },
  cell: {
    color: {
      primary: inube.palette.blue.B400,
      success: inube.palette.green.G400,
      warning: inube.palette.yellow.Y400,
      danger: inube.palette.red.R400,
      help: inube.palette.purple.P400,
      dark: inube.palette.neutral.N900,
      gray: inube.palette.neutral.N300,
      light: inube.palette.neutral.N900,
    },
    background: {
      primary: inube.palette.blue.B50,
      success: inube.palette.green.G50,
      warning: inube.palette.yellow.Y50,
      danger: inube.palette.red.R50,
      help: inube.palette.purple.P50,
      dark: inube.palette.neutral.N30,
      gray: inube.palette.neutral.N20,
      light: inube.palette.neutral.N0,
    },
  },
  pagination: {
    appearance: "gray",
  },
  caption: {
    appearance: "gray",
  },
};

export { tokens };
