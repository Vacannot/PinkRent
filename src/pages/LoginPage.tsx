import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5rem",
      }}
    >
      <LoginForm />
    </Box>
  );
}

export default LoginPage;
