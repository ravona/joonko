// third-parties:
import * as yup from "yup";
import { useFormik } from "formik";

// material-ui:
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
    color: theme.palette.primary.main,
    textAlign: "center",
  },

  FormTitle: {
    fontSize: "18px",
    fontWeight: "800",
    paddingBottom: theme.spacing(1.3),
  },

  FormSubtitle: {
    fontSize: "18px",
    paddingBottom: theme.spacing(4.9),
  },

  FormButton: {
    fontSize: "16px",
    color: "white",
    borderRadius: "50px",
    margin: theme.spacing(3.2, "auto", 2.5),
    padding: theme.spacing(1.3, 2.6),
    textTransform: "none",
    backgroundColor: theme.palette.status.info,
  },

  FormDisclaimer: {
    display: "flex",
    alignItems: "start",
  },

  FormCheckbox: {
    padding: theme.spacing(0, 0.5, 0, 0),
  },

  FormCheckboxLabel: {
    textAlign: "left",
    fontSize: "12px",
  },
  TextField: {
    "& p": {
      color: theme.palette.status.warning,
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
      <Typography className={classes.FormTitle} variant="h4" component="h4">
        Want to get the full version?
      </Typography>

      <Typography className={classes.FormSubtitle} variant="h5" component="h5">
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
        Download Now &gt;&gt;
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
    </form>
  );
};

export default Form;
