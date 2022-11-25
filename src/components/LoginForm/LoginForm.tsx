import styles from "./loginform.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={styles.loginform}>
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
        <FormControl
          sx={{
            width: "267px",
            marginBottom: "50px",
            paddingTop: '8px'
          }}
          className={styles.loginFormControl}
          variant="standard"
        >
          <InputLabel
            sx={{
              color: "black",
              letterSpacing: "-3%"
            }}
            htmlFor="login-form-username"
          >
            Username
          </InputLabel>
          <Input
            id="login-form-username"
            placeholder="Type your username"
            sx={{
              paddingBottom: "16px",
            }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          sx={{
            width: "267px",
            paddingTop: '8px'
          }}
          className={styles.loginFormControl}
          variant="standard"
        >
          <InputLabel
            sx={{
              marginBottom: "22px",
              color: "black",
              letterSpacing: "-3%",
            }}
            htmlFor="login-form-password"
          >
            Password
          </InputLabel>
          <Input
            id="login-form-password"
            placeholder="Type your password"
            type="password"
            sx={{
              paddingBottom: "16px",
            }}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
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
            marginTop: "42px",
            marginBottom: "94px",
          }}
          variant="contained"
        >
          LOGIN
        </Button>
        <Link
          to="/registerPage"
          style={{
            color: "#7E7E7E",
            textDecoration: "underline",
          }}
          className={styles.orRegister}
        >
          Or sign up
        </Link>
      </Box>
    </div>
  );
}

export default LoginForm;
