import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CheckOutlined,
  DeleteOutlineOutlined,
  EditOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useState } from "react";
import womanImg from "../../assets/Womenpainting.jpg";

export const UserProfileListings = () => {
  const theme = useTheme();
  const mobileScreenSize = useMediaQuery(theme.breakpoints.up("xs"));
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <Box
      sx={{
        minWidth: "335px",
        width: "80%",
      }}
    >
      <Typography variant="h6" fontWeight={400}>
        YOUR PRODUCTS
      </Typography>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ ml: "1rem" }} variant="subtitle1">
                Image
              </Typography>
              <Typography sx={{ ml: "3.6rem" }} variant="subtitle1">
                Title
              </Typography>
              <Typography sx={{ ml: "3.6rem" }} variant="subtitle1">
                Price
              </Typography>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr .5fr",
              }}
            >
              <TableCell>
                <img src={womanImg} alt="woman" height={60} />
              </TableCell>
              <TableCell sx={{ mt: "1rem" }}>Woman Painting</TableCell>
              <TableCell sx={{ mt: "1.5rem" }}>123kr</TableCell>
              <TableCell sx={{ mt: "1rem" }}>
                {open ? (
                  <IconButton
                    onClick={() => setOpen(false)}
                    sx={{ width: "2rem", height: "2rem", margin: "auto" }}
                  >
                    <ExpandLess />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => setOpen(true)}
                    sx={{ width: "2rem", height: "2rem", margin: "auto" }}
                  >
                    <ExpandMore />
                  </IconButton>
                )}
              </TableCell>

              <Collapse
                in={open}
                sx={{ gridColumn: "1/5", position: "relative" }}
              >
                {editing ? (
                  <TextField
                    required
                    multiline
                    label="Description"
                    variant="standard"
                    inputProps={{ style: { fontSize: ".9rem" } }}
                    InputLabelProps={{ style: { fontSize: ".9rem" } }}
                  />
                ) : (
                  <Typography sx={{ mb: ".7rem", mt: ".5rem" }}>
                    Description: Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Id rerum aut consectetur exercitationem
                    tenetur alias corporis esse, explicabo corrupti ipsa nihil
                    nam?
                  </Typography>
                )}
                {editing ? (
                  <TextField
                    required
                    multiline
                    label="Category"
                    variant="standard"
                    inputProps={{ style: { fontSize: ".9rem" } }}
                    InputLabelProps={{ style: { fontSize: ".9rem" } }}
                  />
                ) : (
                  <Typography sx={{ mb: ".7rem" }}>Category: Lorem.</Typography>
                )}
                {editing ? (
                  <TextField
                    required
                    multiline
                    label="Rented"
                    variant="standard"
                    inputProps={{ style: { fontSize: ".9rem" } }}
                    InputLabelProps={{ style: { fontSize: ".9rem" } }}
                  />
                ) : (
                  <Typography>Rented: True</Typography>
                )}
                <ButtonGroup sx={{ position: "absolute", right: 0, bottom: 0 }}>
                  {editing ? (
                    <Button
                      startIcon={<CheckOutlined />}
                      color="success"
                      variant="contained"
                      sx={{ color: "white" }}
                      onClick={() => setEditing(false)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      startIcon={<EditOutlined />}
                      color="info"
                      variant="contained"
                      sx={{ color: "white" }}
                      onClick={() => setEditing(true)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    endIcon={<DeleteOutlineOutlined />}
                    color="error"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Collapse>
            </TableRow>
            {/* {products.map((product) => {
            return <AdminProductList key={product.id} product={product} />;
          })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
