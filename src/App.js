// material-ui:
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// pages:
import RemotePage from "./pages/remote";

// styles:
import "./App.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  container: {
    height: "100%",
    padding: theme.spacing(9.6, 3.7, 5),
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} disableGutters>
        <RemotePage />
      </Container>
    </div>
  );
}

export default App;
