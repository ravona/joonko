import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#010A60",
    },
    secondary: {
      main: "#FFA52E",
    },
  },
  spacing: 10,
  typography: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
  },
});

export default theme;
