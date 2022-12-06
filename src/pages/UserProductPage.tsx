import { Box } from "@mui/material";
import { UserProfileListings } from "../components/userProfile/UserProfileListing";

function UserProductPage() {
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          rowGap: "45px",
          columnGap: { md: "4rem" },
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
     
        <UserProfileListings />
      </Box>
    )
}

export default UserProductPage;