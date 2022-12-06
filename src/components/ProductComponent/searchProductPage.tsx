import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Card } from "@mui/material";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchIconComponent() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        "@media screen and (max-width: 970px)": { display: "none" },
      }}
    >
      <Toolbar sx={{ diplay: "flex", justifyContent: "space-around" }}>
        <Button>VEHICLES</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>HOME</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>CLOTHING</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>ELECTRONICS</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>RESIDENCE</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>HOBBY</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "pink" }}
        />
        <Button>OTHER</Button>
        <Card sx={{ display: "flex", alignItems: "center" }}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "pink" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Card>
      </Toolbar>
    </Box>
  );
}
