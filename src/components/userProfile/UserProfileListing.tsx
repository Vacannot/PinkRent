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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DeleteOutlineOutlined, EditOutlined, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import womanImg from "../../assets/Womenpainting.jpg";

export const UserProfileListings = () => {
  const theme = useTheme();
  const mobileScreenSize = useMediaQuery(theme.breakpoints.up("xs"));
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h6" fontWeight={400}>
        YOUR PRODUCTS
      </Typography>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">
                <Typography variant="subtitle1">Image</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1">Title</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1">Price</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img src={womanImg} alt="woman" height={60} />
              </TableCell>
              <TableCell>Woman Painting</TableCell>
              <TableCell>123kr</TableCell>
              {open ? (
                <IconButton onClick={() => setOpen(false)}>
                  <ExpandLess />
                </IconButton>
              ) : (
                <IconButton onClick={() => setOpen(true)}>
                  <ExpandMore />
                </IconButton>
              )}
              <Collapse in={open}>
                <Typography>Description: Lorem, ipsum.</Typography>
                <Typography>Category: Lorem.</Typography>
                <Typography>Rented: True</Typography>
                <ButtonGroup>
                  <Button startIcon={<EditOutlined />}>Edit</Button>
                  <Button endIcon={<DeleteOutlineOutlined/>} color="error" variant="contained">Delete</Button>
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
