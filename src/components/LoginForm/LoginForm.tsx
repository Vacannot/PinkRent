import styles from "./loginform.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { useAuth } from "../../backend/Context";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
      formik.resetForm();
      navigate("/catalog");
    },
  });
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "55px",
        }}
      >
        LOGIN
      </h2>
      <form onSubmit={formik.handleSubmit} className={styles.centerForm}>
        <TextField
          sx={{
            paddingBottom: "4rem",
            width: "17rem",
            paddingTop: ".5rem",
          }}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          sx={{
            paddingBottom: "4rem",
            width: "17rem",
            paddingTop: ".5rem",
          }}
          id="password"
          name="password"
          label="Password"
          type={values.showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="standard"
          InputProps={{
            startAdornment: <LockOutlinedIcon />,
            endAdornment: (
              <IconButton onClick={handleClickShowPassword}>
                {values.showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            ),
          }}
        />

        <p
          style={{
            color: "#7E7E7E",
            fontSize: "13px",
            marginLeft: "8.5rem",
          }}
          className={styles.forgotPassword}
        >
          Forgot your password?
        </p>
        <Button
          sx={{
            width: "266px",
            color: "white",
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
          variant="contained"
          type="submit"
        >
          LOGIN
        </Button>
      </form>

      <Link
        to="/register"
        style={{
          color: "#7E7E7E",
          textDecoration: "underline",
        }}
        className={styles.orRegister}
      >
        Or sign up
      </Link>
    </Box>
  );
}

export default LoginForm;
