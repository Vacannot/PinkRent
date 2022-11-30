import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  CheckOutlined,
  DeleteOutlineOutlined,
  EditOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import {useEffect, useState} from "react";
import womanImg from "../../assets/Womenpainting.jpg";
import {RemoveProductConfirmation} from "./DeleteProductConfirmation";
import {onAuthStateChanged} from "firebase/auth";
import {useAuth} from "../../backend/Context";
import {auth} from "../../backend/firebase";

export const UserProfileListings = () => {
  const {getProductsByUserID, getCategories} = useAuth();

  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getProductsByUserID(user.uid).then((products) => {
          setProducts(products);
        });

        getCategories().then((categoris) => {
          setCategories(categoris);
        });
      }
    });
  }, [getProductsByUserID, getCategories]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const getCategoryById = (id: string) => {
    for (let category of categories) {
      if (category.id === id) {
        return category;
      }
    }

    return "ERROR";
  };

  const check = () => {
    console.log("before", openConfirm);
    setOpenConfirm(true);
    console.log("after", openConfirm);
  };

  return (
    <Box
      sx={{
        minWidth: "335px",
        width: "80%",
        mt: "1rem",
      }}
    >
      <Typography sx={{pb: "2.5rem"}} variant="h6" fontWeight={400}>
        YOUR PRODUCTS
      </Typography>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead sx={{borderBottom: "1px solid rgba(224, 224, 224, 1)"}}>
            <TableRow
              sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr .5fr"}}
            >
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                Image
              </Typography>
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                Title
              </Typography>
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                Price
              </Typography>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => {
              const category = getCategoryById(item.category);
              return (
                <TableRow
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr .5fr",
                  }}
                >
                  <TableCell>
                    <img src={item.image} alt={item.title} height={60} />
                  </TableCell>
                  <TableCell sx={{mt: "1.5rem"}}>{item.title}</TableCell>
                  <TableCell sx={{mt: "1.5rem"}}>{item.price}kr</TableCell>
                  <TableCell sx={{mt: "1rem"}}>
                    {open ? (
                      <IconButton
                        onClick={() => setOpen(false)}
                        sx={{width: "2rem", height: "2rem", margin: "auto"}}
                      >
                        <ExpandLess />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => setOpen(true)}
                        sx={{width: "2rem", height: "2rem", margin: "auto"}}
                      >
                        <ExpandMore />
                      </IconButton>
                    )}
                  </TableCell>
                  <Collapse
                    in={open}
                    sx={{
                      gridColumn: "1/5",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "25em",
                        columnGap: "2rem",
                        mt: ".5rem",
                      }}
                    >
                      {editing ? (
                        <TextField
                          required
                          multiline
                          label="Description"
                          variant="standard"
                          sx={{width: "25rem"}}
                          inputProps={{style: {fontSize: ".9rem"}}}
                          InputLabelProps={{style: {fontSize: ".9rem"}}}
                        />
                      ) : (
                        <Typography sx={{mb: ".7rem", mt: ".5rem"}}>
                          {item.description}
                        </Typography>
                      )}
                      {editing ? (
                        <FormControl
                          sx={{mt: ".5rem", width: "13rem"}}
                          variant="standard"
                        >
                          <InputLabel
                            sx={{fontSize: ".9rem"}}
                            id="demo-simple-select-standard-label"
                          >
                            Category*
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Age"
                          >
                            {categories.map((item) => {
                              return (
                                <MenuItem value={item.name}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      ) : (
                        <Typography sx={{mb: ".7rem"}}>
                          Category: {category.name}
                        </Typography>
                      )}
                      {editing ? (
                        <FormControl
                          sx={{mt: ".5rem", width: "10rem"}}
                          variant="standard"
                        >
                          <InputLabel
                            sx={{fontSize: ".9rem"}}
                            id="demo-simple-select-standard-label"
                          >
                            Rented*
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Rented"
                          >
                            <MenuItem value="RENTED">RENTED</MenuItem>
                            <MenuItem value="NOT RENTED">NOT RENTED</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        <Typography>Rented: True</Typography>
                      )}
                    </Box>
                    <ButtonGroup
                      sx={{position: "absolute", right: 0, bottom: 0}}
                    >
                      {editing ? (
                        <Button
                          startIcon={<CheckOutlined />}
                          color="success"
                          variant="contained"
                          sx={{color: "white"}}
                          onClick={() => setEditing(false)}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          startIcon={<EditOutlined />}
                          color="info"
                          variant="contained"
                          sx={{color: "white"}}
                          onClick={() => setEditing(true)}
                        >
                          Edit
                        </Button>
                      )}
                      <Button
                        endIcon={<DeleteOutlineOutlined />}
                        color="error"
                        variant="contained"
                        onClick={() => check()}
                      >
                        {openConfirm ? (
                          <RemoveProductConfirmation />
                        ) : undefined}
                        Delete
                      </Button>
                    </ButtonGroup>
                  </Collapse>
                </TableRow>
              );
            })}

            {/* {products.map((product) => {
            return <AdminProductList key={product.id} product={product} />;
          })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
