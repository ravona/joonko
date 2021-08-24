// material-ui:
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components:
import FormBecomeRemoteReady from "./components/forms/FormBecomeRemoteReady/FormBecomeRemoteReady";

// styles:
import "./App.scss";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(9.6, 2.7, 5),
  },
  content: {
    padding: theme.spacing(2.9, 0, 2.7),
    color: theme.palette.primary.main,
  },
  content__title: {
    fontSize: "34px",
    marginBottom: theme.spacing(0.5),
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  content__subtitle: {
    fontSize: "18px",
  },
  content__list: {
    padding: 0,
    listStylePosition: "inside",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container
        className={classes.container}
        disableGutters="true"
        maxWidth="md"
      >
        <Grid
          className={classes.content}
          container
          justify="center"
          alignItems="center"
        >
          <Grid Item xs={12} lg={7}>
            <Typography
              className={classes.content__title}
              variant="h3"
              component="h2"
            >
              The Future of Work in the now: Why you should Become Remote-ready
            </Typography>

            <Typography
              className={classes.content__subtitle}
              variant="subtitle1"
              gutterBottom
            >
              Infographic
            </Typography>

            <Typography variant="body1" gutterBottom>
              The results are in, and the verdict? Remote is here to stay.
              <br />
              Thanks to a global pandemic companies have had to reevaluate the
              power of distributed workforces and we’ve put together all the
              reasons why going remote is the right move to make.
              <br /> In this infographics, you’ll see:
              <ul className={classes.content__list}>
                <li>How remote work broadens the talent pool</li>
                <li>The productivity results behind distributed teams</li>
                <li>
                  An increase in diversity as a result of remote recruitment
                </li>
                <li>
                  Money saved on operational costs and salary negotiations
                </li>
              </ul>
              What better time to refresh your strategy than on the brink of a
              whole new world? Dig into this list of recruiting methodologies
              and adjust your sails for the future!
            </Typography>
          </Grid>

          <Grid Item xs={12} lg={5} align="center">
            <FormBecomeRemoteReady />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
