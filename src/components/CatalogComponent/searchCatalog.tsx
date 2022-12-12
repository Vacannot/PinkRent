import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Card } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        flexGrow: 1,
        "@media screen and (max-width: 970px)": { display: "none" },
      }}
    >
      <Toolbar sx={{ diplay: "flex", justifyContent: "space-around" }}>
        <Button>{t("vehciles")}</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "primary" }}
        />
        <Button>{t("home")}</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "primary" }}
        />
        <Button>{t("clothing")}</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "primary" }}
        />
        <Button>{t("eletronics")}</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "primary" }}
        />
        <Button>{t("residence")}</Button>
        <hr
          style={{ height: "1.7rem", margin: "0", backgroundColor: "primary" }}
        />
        <Button>{t("hobby")}</Button>
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
