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
import {RemoveProductConfirmation} from "./DeleteProductConfirmation";
import {onAuthStateChanged} from "firebase/auth";
import {useAuth} from "../../backend/Context";
import {auth} from "../../backend/firebase";
import {useFormik} from "formik";
import * as yup from "yup";

const getCategoryById = (categories: any[], id: string) => {
  for (let category of categories) {
    if (category.id === id) {
      return category;
    }
  }

  return "ERROR";
};

const ProductInfo = ({
  product,
  category,
  openConfirm,
  setEditing,
  check,
}: {
  product: any;
  category: any;
  openConfirm: boolean;
  setEditing: (edit: boolean) => void;
  check: () => void;
}) => {
  return (
    <>
      <Typography sx={{mb: ".7rem", mt: ".5rem"}}>
        {product.description}
      </Typography>
      <Typography sx={{mb: ".7rem"}}>Category: {category.name}</Typography>
      {/* <Typography>Rented: True</Typography> */}
      <ButtonGroup sx={{position: "absolute", right: 0, bottom: 0}}>
        <Button
          startIcon={<EditOutlined />}
          color="info"
          variant="contained"
          sx={{color: "white"}}
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
        <Button
          endIcon={<DeleteOutlineOutlined />}
          color="error"
          variant="contained"
          onClick={() => check()}
        >
          {openConfirm ? (
            <RemoveProductConfirmation product={product} />
          ) : undefined}
          Delete
        </Button>
      </ButtonGroup>
    </>
  );
};

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
  category: yup.string().required(),
});

const EditProduct = ({
  product,
  categories,
  openConfirm,
  setEditing,
  check,
  update,
}: {
  product: any;
  categories: any[];

  openConfirm: boolean;
  setEditing: (edit: boolean) => void;
  check: () => void;
  update: () => void;
}) => {
  const {setProduct} = useAuth();

  const initialValues = {
    title: product.title,
    description: product.description,
    price: product.price,
    category: getCategoryById(categories, product.category).id,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await setProduct(product, values);
      update();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        required
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        // helperText={formik.touched.description && formik.errors.description}
        variant="standard"
        sx={{width: "25rem"}}
        inputProps={{style: {fontSize: ".9rem"}}}
        InputLabelProps={{style: {fontSize: ".9rem"}}}
      />
      <TextField
        required
        multiline
        id="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        // helperText={formik.touched.description && formik.errors.description}
        variant="standard"
        sx={{width: "25rem"}}
        inputProps={{style: {fontSize: ".9rem"}}}
        InputLabelProps={{style: {fontSize: ".9rem"}}}
      />
      <TextField
        required
        multiline
        id="price"
        label="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        // helperText={formik.touched.description && formik.errors.description}
        variant="standard"
        sx={{width: "25rem"}}
        inputProps={{style: {fontSize: ".9rem"}}}
        InputLabelProps={{style: {fontSize: ".9rem"}}}
      />

      <FormControl sx={{mt: ".5rem", width: "13rem"}} variant="standard">
        <InputLabel sx={{fontSize: ".9rem"}} id="category-label">
          Category*
        </InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          label="Category"
          value={formik.values.category}
          onChange={(event) => {
            console.log("Change");
            console.log(event.target.value);
            formik.setFieldValue("category", event.target.value);
          }}
        >
          {categories.map((item, i) => {
            return (
              <MenuItem key={i} value={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <ButtonGroup sx={{position: "absolute", right: 0, bottom: 0}}>
        <Button
          startIcon={<CheckOutlined />}
          color="success"
          variant="contained"
          sx={{color: "white"}}
          onClick={() => {
            setEditing(false);
            formik.handleSubmit();
          }}
        >
          Save
        </Button>
        <Button
          endIcon={<DeleteOutlineOutlined />}
          color="error"
          variant="contained"
          onClick={() => check()}
        >
          {openConfirm ? (
            <RemoveProductConfirmation product={product} />
          ) : undefined}
          Delete
        </Button>
      </ButtonGroup>

    </form>
  );
};


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

  const update = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getProductsByUserID(user.uid).then((products) => {
          setProducts(products);
        });
      }
    });
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
                  key={item.id}
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
                        <EditProduct
                          product={item}
                          categories={categories}
                          openConfirm={openConfirm}
                          setEditing={setEditing}
                          check={check}
                          update={update}
                        />
                      ) : (
                        <ProductInfo
                          product={item}
                          category={category}
                          openConfirm={openConfirm}
                          setEditing={setEditing}
                          check={check}
                        />
                      )}
                    </Box>
                  </Collapse>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
