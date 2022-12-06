import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {Button, Card} from "@mui/material";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../backend/firebase";
import {useAuth} from "../../backend/Context";

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

export default function SearchIconComponent(props: any) {
  const {getCategories, setFilter} = useAuth();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, [getCategories]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        "@media screen and (max-width: 970px)": { display: "none" },
      }}
    >
      <Toolbar sx={{diplay: "flex", justifyContent: "space-around"}}>
        <Button
          onClick={() => {
            setFilter(null);
          }}
        >
          Remove Filter
        </Button>
        {categories.map((item) => {
          return (
            <>
              <hr
                style={{height: "1.7rem", margin: "0", backgroundColor: "pink"}}
              />
              <Button
                onClick={() => {
                  setFilter(item.id);
                }}
              >
                {item.name}
              </Button>
            </>
          );
        })}
        <Card sx={{display: "flex", alignItems: "center"}}>
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
