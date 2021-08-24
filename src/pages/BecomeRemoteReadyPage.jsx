// material-ui:
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// components:
import Page from "../components/Page";
import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2.7, 0),
    padding: theme.spacing(5, 2.7),
  },
}));

const BecomeRemoteReadyPage = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={12} lg={6}>
        <Page
          title="The Future of Work in the now: Why you should Become Remote-ready"
          subtitle="Infographic"
        >
          <Typography variant="body1">
            The results are in, and the verdict? Remote is here to stay.
          </Typography>
          <Typography variant="body1">
            Thanks to a global pandemic companies have had to reevaluate the
            power of distributed workforces and we’ve put together all the
            reasons why going remote is the right move to make. <br />
            In this infographics, you’ll see:
          </Typography>

          <ul className={classes.list}>
            <li>How remote work broadens the talent pool</li>
            <li>The productivity results behind distributed teams</li>
            <li>An increase in diversity as a result of remote recruitment</li>
            <li>Money saved on operational costs and salary negotiations</li>
          </ul>

          <Typography variant="body1">
            What better time to refresh your strategy than on the brink of a
            whole new world? Dig into this list of recruiting methodologies and
            adjust your sails for the future!
          </Typography>
        </Page>
      </Grid>

      <Grid item xs={12} lg={4}>
        <Paper className={classes.form} elevation={3}>
          <Form />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default BecomeRemoteReadyPage;
