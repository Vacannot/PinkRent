import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../backend/firebase";
import {useCollection} from "react-firebase-hooks/firestore";

const initialValues = {
  title: "",
  price: 0,
  description: "",
  category: "",
};

const validationSchema = yup.object({
  title: yup.string().required("Product needs a title"),
  price: yup.number().required("Product needs a price"),
  description: yup.string().required("Product needs a description"),
  category: yup.string().required("Proudct needs a category"),
});

interface categoryTypes {
  name: string;
  id: string;
}

export const AddProduct = () => {
  const db = getFirestore();
  const productCol = collection(db, "products");
  const categoriesCol = collection(db, "categories");
  const [snapshot, loading, error] = useCollection(categoriesCol);

  // const [categories, setCategories] = useState<any[]>([]);
  // useEffect(() => {
  //   getDocs(categoriesCol)
  //     .then((snapshot) => {
  //       let lel: any[] = [];
  //       snapshot.docs.forEach((doc) => {
  //         // setCategories([...categories, {...doc.data(), id: doc.id}]);
  //         lel.push({...doc.data(), id: doc.id});
  //       });
  //
  //       setCategories([...lel]);
  //       console.log(categories);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

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
};
