// material-ui:
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// components:
import Content from "../components/content";
import Form from "../components/form";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },

  content: {
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(10),
    },
  },
}));

const RemotePage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={12} lg={7} className={classes.content}>
        <Content
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

          <Typography variant="body1">
            <ul>
              <li>How remote work broadens the talent pool</li>
              <li>The productivity results behind distributed teams</li>
              <li>
                An increase in diversity as a result of remote recruitment
              </li>
              <li>Money saved on operational costs and salary negotiations</li>
            </ul>
          </Typography>

          <Typography variant="body1">
            What better time to refresh your strategy than on the brink of a
            whole new world? Dig into this list of recruiting methodologies and
            adjust your sails for the future!
          </Typography>
        </Content>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Form />
      </Grid>
    </Grid>
  );
};
export default RemotePage;
