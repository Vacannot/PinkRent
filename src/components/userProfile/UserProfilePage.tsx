import { Box } from "@mui/material";
import { UserInfoCard } from "./UserInfoCard";
import { UserProfileListings } from "./UserProfileListing";

export const UserProfilePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        rowGap: "35px",
        columnGap: { md: "4rem" },
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <UserInfoCard />
      <UserProfileListings />
    </Box>
  );
};
