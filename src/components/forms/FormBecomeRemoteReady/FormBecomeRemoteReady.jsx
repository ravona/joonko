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
import { useApi } from "../../../context/AppProvider";

const validationSchema = yup.object({
  name: yup.string("name").required("Required"),
  companyName: yup.string("companyName").required("Required"),
  phone: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 2.7),
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    paddingBottom: theme.spacing(2.1),
  },
  subtitle: {
    fontSize: "18px",
    paddingBottom: theme.spacing(4.9),
  },
  button: {
    color: "white",
    borderRadius: "50px",
    dispaly: "block",
    marginTop: theme.spacing(3.2),
    marginBottom: theme.spacing(2.5),
    padding: theme.spacing(1.3, 2.6),
    textTransform: "none",
  },
}));

// add props: title, subtitle, cbFunc, children
const FormBecomeRemote = () => {
  const classes = useStyles();

  const { submitForm } = useApi();

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <Paper elevation={3}>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Typography className={classes.title} variant="h4" component="h4">
          Want to get the full version?
        </Typography>
        <Typography className={classes.subtitle} variant="h5" component="h5">
          Fill in the form below:
        </Typography>

        <TextField
          fullWidth
          name="name"
          id="name"
          label="Full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          name="companyName"
          id="companyName"
          label="Company name"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.companyName && formik.errors.companyName}
          helperText={formik.touched.companyName && formik.errors.companyName}
        />

        <TextField
          fullWidth
          name="phone"
          id="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <TextField
          fullWidth
          name="email"
          id="email"
          label="Work email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Download Now
        </Button>

        <FormControlLabel
          align="left"
          control={
            <Checkbox
              // checked={state.checkedA}
              // onChange={handleChange}
              name="checkedA"
            />
          }
          label="I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes."
        />
      </form>
    </Paper>
  );
};

export default FormBecomeRemote;
