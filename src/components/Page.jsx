import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    color: theme.palette.primary.main,
  },

  title: {
    fontSize: "34px",
    fontWeight: "800",
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: theme.spacing(2.9),
  },
}));

const Page = ({ title, subtitle, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Typography
        className={classes.title}
        component="h1"
        variant="h1"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        className={classes.subtitle}
        component="h2"
        variant="subtitle1"
        gutterBottom
      >
        {subtitle}
      </Typography>

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Page;
