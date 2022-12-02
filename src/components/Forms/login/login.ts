// import {Button, TextField} from "@mui/material";
// import {useFormik} from "formik";
// import * as yup from "yup";
// import {createUserWithEmailAndPassword} from "firebase/auth";
// import {auth} from "../../../backend/firebase";
// import {useAuth} from "../../../backend/Context";

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

// const initialValues = {
//   email: "",
//   password: "",
// };

// export const LoginTest = () => {
//   const {login} = useAuth();

//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       login(values.email, values.password);
//       formik.resetForm();
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           variant="standard"
//         />
//         <TextField
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           variant="standard"
//         />
//         <Button color="primary" variant="text" type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export const SignupTest = () => {
//   const {signup} = useAuth();

//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       signup(values.email, values.password);
//       formik.resetForm();
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           variant="standard"
//         />
//         <TextField
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           variant="standard"
//         />
//         <Button color="primary" variant="text" type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export const AddProductTest = () => {
//   const signup = async (email: any, password: any) => {
//     const user = await createUserWithEmailAndPassword(auth, email, password);
//     console.log(user);
//   };

//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       signup(values.email, values.password);
//       formik.resetForm();
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           variant="standard"
//         />
//         <TextField
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           variant="standard"
//         />
//         <Button color="primary" variant="text" type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };
export {};
