import {
  Box,
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

export const UserProfileListings = () => {
  const theme = useTheme();
  const mobileScreenSize = useMediaQuery(theme.breakpoints.up("xs"));

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
              <TableCell align="left">
                <Typography variant="subtitle1">Remove</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.map((product) => {
            return <AdminProductList key={product.id} product={product} />;
          })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
