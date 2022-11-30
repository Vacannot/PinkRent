import {Box} from "@mui/system";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Footer() {
  const {width} = useWindowDimensions();
  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }

  if (breakpoint)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100vw",
          height: "120px",
          alignItems: "center",
          bottom: 0,
          position: "absolute",
        }}
      >
        <Link to="/">
          <IconButton sx={{border: 1, borderColor: "white"}}>
            <HomeIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
        <Link to="/notifications">
          <IconButton sx={{border: 1, borderColor: "white"}}>
            <NotificationsIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
        <Link to="/add">
          <IconButton sx={{border: 1, borderColor: "white"}}>
            <AddCircleOutlineIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
        <Link to="/catalog">
          <IconButton sx={{border: 1, borderColor: "white"}}>
            <SearchIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
        <Link to="/profile">
          <IconButton sx={{border: 1, borderColor: "white"}}>
            <AccountCircleIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
      </Box>
    );
  return null;
}
