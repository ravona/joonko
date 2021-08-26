// third-parties:
import * as yup from "yup";
import { useFormik } from "formik";

// material-ui:
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// context:
import { useApi } from "../context/AppProvider";

const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  companyName: yup.string("companyName").required("company name is required"),
  phone: yup.string("phone").required("phone is required"),
  email: yup.string().email("invalid email").required("email is required"),
  termsOfService: yup
    .boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: "302px",

    [theme.breakpoints.up("lg")]: {
      maxWidth: "412px",
    },
  },

  paper: {
    padding: theme.spacing(5, 2.7),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(7.4, 4, 6),
    },
    textAlign: "center",
    color: theme.palette.primary.main,
  },

  FormTitle: {
    fontSize: "18px",
    fontWeight: "800",
    marginBottom: theme.spacing(2.1),
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
      marginBottom: theme.spacing(1.3),
    },
  },

  FormSubtitle: {
    fontSize: "18px",
    marginBottom: theme.spacing(2.8),
  },

  TextField: {
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      marginBottom: theme.spacing(2.3),
    },
    "& .MuiInput-underline::before": {
      borderColor: theme.palette.primary.main,
    },
    "& p": {
      color: theme.palette.status.warning,
    },
  },

  FormButton: {
    fontSize: "16px",
    color: "white",
    borderRadius: "50px",
    margin: theme.spacing(4.4, 0, 2.4),
    padding: theme.spacing(0.9, 2.5),
    textTransform: "none",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.status.info,
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      lineHeight: "23px",
      margin: theme.spacing(2, 0),
      padding: theme.spacing(1.5, 1.8),
    },
  },

  FormDisclaimer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    margin: 0,

    "& svg": {
      fontSize: "1rem",
    },
  },

  FormCheckbox: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(0.5),
  },

  FormCheckboxLabel: {
    lineHeight: "22px",
    textAlign: "left",
    fontSize: "13px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
}));

// add props: title, subtitle, cbFunc, children
const Form = () => {
  const classes = useStyles();

  const { setRemoteReadyFormData } = useApi();

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      termsOfService: false,
    },
    validationSchema,
    onSubmit: (values) => {
      setRemoteReadyFormData(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.FormTitle} variant="h4" component="h4">
          Want to get the full version?
        </Typography>

        <Typography
          className={classes.FormSubtitle}
          variant="h5"
          component="h5"
        >
          Fill in the form below:
        </Typography>

        <TextField
          classes={{ root: classes.TextField }}
          fullWidth
          name="name"
          id="name"
          label="Full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
        />

        <TextField
          classes={{ root: classes.TextField }}
          fullWidth
          name="companyName"
          id="companyName"
          label="Company name"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.companyName && formik.errors.companyName}
        />

        <TextField
          classes={{ root: classes.TextField }}
          fullWidth
          name="phone"
          id="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <TextField
          classes={{ root: classes.TextField }}
          fullWidth
          name="email"
          id="email"
          label="Work email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button
          className={classes.FormButton}
          variant="contained"
          type="submit"
          color="secondary"
        >
          Download now &gt;&gt;
        </Button>

        <FormControlLabel
          className={classes.FormDisclaimer}
          classes={{ label: classes.FormCheckboxLabel }}
          label="I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes."
          control={
            <Checkbox
              className={classes.FormCheckbox}
              onChange={formik.handleChange}
              value={formik.values.termsOfService}
              name="termsOfService"
              color="primary"
            />
          }
        />
      </Paper>
    </form>
  );
};

export default Form;
