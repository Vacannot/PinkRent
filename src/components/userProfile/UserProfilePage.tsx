import { Box } from "@mui/material";
import { UserInfoCard } from "./UserInfoCard";
import { UserProfileListings } from "./UserProfileListing";

export const UserProfilePage = () => {
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
      <UserInfoCard />
      <UserProfileListings />
    </Box>
  );
};
