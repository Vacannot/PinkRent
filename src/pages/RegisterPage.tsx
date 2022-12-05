import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5rem",
      }}
    >
      <RegisterForm />
    </Box>
  );
}

export default RegisterPage;
