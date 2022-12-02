import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {onAuthStateChanged} from "firebase/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth} from "../backend/firebase";

const initialValues = {
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};

const validationSchema = yup.object({
  title: yup.string().required("Product needs a title"),
  price: yup.number().required("Product needs a price"),
  description: yup.string().required("Product needs a description"),
  category: yup.string().required("Proudct needs a category"),
  image: yup.string().required("Fuck off"),
});

export const uuid = () => {
  let dt = new Date().getTime();

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

function AddProductPage() {
  const db = getFirestore();
  const storage = getStorage();
  const productCol = collection(db, "products");
  const categoriesCol = collection(db, "categories");
  const [snapshot] = useCollection(categoriesCol);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          addDoc(productCol, {
            title: values.title,
            price: values.price,
            description: values.description,
            category: values.category,
            userID: user.uid,
            image: values.image,
          });
        } else {
          prompt("To add a product you need to be signed in");
        }
      });
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="image"
          name="Image"
          type="file"
          inputProps={{accept: "image/*"}}
          onChange={(event) => {
            const file = (event.currentTarget as HTMLInputElement).files![0];
            const storageRef = ref(storage, uuid() + " " + file.name);
            uploadBytes(storageRef, file).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                formik.setFieldValue("image", downloadURL);
              });
            });
          }}
        />
        <TextField
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          variant="standard"
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          variant="standard"
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          multiline
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          variant="standard"
        />
        <FormControl sx={{minWidth: 120}} required>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
            variant="standard"
          >
            {snapshot &&
              snapshot.docs.map((item: any) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.data()["name"]}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Button color="primary" variant="text" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddProductPage;
