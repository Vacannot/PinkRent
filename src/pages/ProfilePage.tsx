import { Box } from "@mui/material";
import { UserProfilePage } from "../components/userProfile/UserProfilePage";

function ProfilePage() {
  return (
    <>
      <Box sx={{ mt: "4rem" }}>
        <UserProfilePage />
      </Box>
    </>
  );
}

export default ProfilePage;
