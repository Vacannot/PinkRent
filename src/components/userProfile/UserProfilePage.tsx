import { Box } from "@mui/material";
import { UserInfoCard } from "./UserInfoCard";
import { UserProfileListings } from "./UserProfileListing";

export const UserProfilePage = () => {
  return (
    <Box sx={{display: 'flex', }}>
      <UserInfoCard />
      <UserProfileListings />
    </ Box>
  );
};
