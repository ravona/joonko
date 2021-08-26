import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },

  title: {
    maxWidth: "312px",
    fontSize: "34px",
    fontWeight: "800",
    lineHeight: "45px",
    marginBottom: theme.spacing(1.3),
    [theme.breakpoints.up("lg")]: {
      maxWidth: "602px",
      lineHeight: "60px",
      fontSize: "40px",
    },
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: theme.spacing(3.8),
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
      marginBottom: theme.spacing(3),
    },
  },

  content: {
    maxWidth: "338px",
    marginBottom: theme.spacing(11),
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      maxWidth: "532px",
    },
  },
}));

const Content = ({ title, subtitle, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h1">
        {title}
      </Typography>

      <Typography
        className={classes.subtitle}
        component="h2"
        variant="subtitle1"
      >
        {subtitle}
      </Typography>

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Content;
