import { createMuiTheme } from "@material-ui/core/styles";

import colors from "./colors";

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: "Roboto, Raleway",
  },
  palette: {
    colors,
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.blue,
    },
  },
  overrides: {},
});
