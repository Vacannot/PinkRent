import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
} from "@mui/material";
import {
  BorderColorOutlined,
  LanguageOutlined,
  DeleteOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import styles from "./userProfile.module.scss";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../../backend/firebase";
import {useFormik} from "formik";
import * as yup from "yup";
import {useAuth} from "../../backend/Context";
import {useNavigate} from "react-router-dom";

const validationSchemaChangePass = yup.object({
  oldPassword: yup.string().required("Password is required"),
  newPassword: yup.string().required("new Password is required"),
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const {updateUserPassword} = useAuth();
  const {onClose, open} = props;

  const [error, setError] = useState<string>("");

  const handleClose = () => {
    onClose();
    setError("");
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validationSchema: validationSchemaChangePass,
    onSubmit: (values) => {
      updateUserPassword(values)
        .then(() => {
          handleClose();
          formik.resetForm();
        })
        .catch(() => {
          console.error("Failed to update password");
          setError("Wrong Password");
        });
    },
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change Password</DialogTitle>
      {error.length !== 0 ? <Typography>{error}</Typography> : <></>}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="oldPassword"
          name="oldPassword"
          label="Current Password"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
          }
          helperText={formik.touched.oldPassword && formik.errors.oldPassword}
          variant="standard"
        />
        <TextField
          id="newPassword"
          name="newPassword"
          label="New Password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
          variant="standard"
        />
        <TextField
          id="newPasswordConfirmation"
          name="newPasswordConfirmation"
          label="Confirm New Password"
          value={formik.values.newPasswordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.newPasswordConfirmation &&
            Boolean(formik.errors.newPasswordConfirmation)
          }
          helperText={
            formik.touched.newPasswordConfirmation &&
            formik.errors.newPasswordConfirmation
          }
          variant="standard"
        />
        <Button type="submit">Confirm Change Password</Button>
      </form>
    </Dialog>
  );
}

const View = ({user}: {user: any}) => {
  const {deleteUser} = useAuth();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography className={styles.spacing}>
        Name: {user?.displayName}
      </Typography>
      <Typography className={styles.spacing}>Email: {user?.email}</Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Language: English
        <IconButton>
          <LanguageOutlined />
        </IconButton>
      </Typography>
      <Button
        onClick={handleClickOpen}
        endIcon={<VpnKeyOutlined />}
        color="info"
      >
        Change Password
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
      <Button
        variant="text"
        color="error"
        endIcon={<DeleteOutlined />}
        onClick={() => {
          const password = prompt("Password");
          if (password)
            deleteUser(password).then(() => {
              navigate("/");
            });
        }}
      >
        Delete
      </Button>
    </>
  );
};

const validationSchema = yup.object({
  displayName: yup.string().required(),
});

const Edit = ({user, close}: {user: any; close: () => void}) => {
  const {updateUser} = useAuth();

  const initialValues = {
    displayName: "",
  };

  if (user) {
    initialValues.displayName = user.displayName ? user.displayName : "";
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (user) updateUser(values);
      formik.resetForm();
      close();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="displayName"
        name="displayName"
        label="Name"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.touched.displayName && Boolean(formik.errors.displayName)}
        helperText={formik.touched.displayName && formik.errors.displayName}
        variant="standard"
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export const UserInfoCard = () => {
  const user = getAuth().currentUser;
  const [, setBSUpdate] = useState<any>(null);

  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setBSUpdate("Hehehe");
    });
  }, []);
  return (
    <Card sx={{width: 335, height: "fit-content"}}>
      <CardContent sx={{paddingBottom: "5px"}}>
        <div id="recaptcha-container"></div>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className={styles.spacing}
          variant="h6"
          fontWeight={400}
        >
          PERSONAL DETAILS
          <IconButton
            onClick={() => {
              setEdit(!edit);
            }}
          >
            <BorderColorOutlined />
          </IconButton>
        </Typography>
        {edit ? (
          <Edit
            user={user}
            close={() => {
              setEdit(false);
            }}
          />
        ) : (
          <View user={user} />
        )}
      </CardContent>
    </Card>
  );
};
