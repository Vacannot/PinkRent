import { Box } from "@mui/material";
import { UserInfoCard } from "./UserInfoCard";
import { UserProfileListings } from "./UserProfileListing";

export const UserProfilePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        rowGap: "35px",
        columnGap: { md: "4rem" },
        maxWidth: "1000px",
      }}
    >
      <UserInfoCard />
      <UserProfileListings />
    </Box>
  );
};
