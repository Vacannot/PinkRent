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
          justifyContent: "space-evenly",
          width: "100vw",
          alignItems: "center",
          position: "fixed",
          bottom: "3rem",
          zIndex: "10000"
        }}
      >
        <Link to="/">
          <IconButton sx={{border: 1, borderColor: "black"}}>
            <HomeIcon sx={{color: "black"}} />
          </IconButton>
        </Link>
        <Link to="/notifications">
          <IconButton sx={{border: 1, borderColor: "black"}}>
            <NotificationsIcon sx={{color: "black"}} />
          </IconButton>
        </Link>
        <Link to="/add">
          <IconButton sx={{border: 1, borderColor: "black"}}>
            <AddCircleOutlineIcon sx={{color: "black"}} />
          </IconButton>
        </Link>
        <Link to="/catalog">
          <IconButton sx={{border: 1, borderColor: "black"}}>
            <SearchIcon sx={{color: "black"}} />
          </IconButton>
        </Link>
        <Link to="/profile">
          <IconButton sx={{border: 1, borderColor: "black"}}>
            <AccountCircleIcon sx={{color: "black"}} />
          </IconButton>
        </Link>
      </Box>
    );
  return null;
}
