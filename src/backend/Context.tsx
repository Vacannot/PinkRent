import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
  User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { auth, db } from "./firebase";

interface context {
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  updateUser: (info: { displayName: string }) => void;
  updateUserPassword: (info: {
    oldPassword: string;
    newPassword: string;
  }) => Promise<void>;
  deleteUser: (password: string) => Promise<void>;
  getProductsByUserID: (userid: string) => Promise<any[]>;
  getNotificationsByUserID: (productOwnerID: string) => Promise<any[]>;
  getProductByID: (productID: string) => Promise<any>;
  getCategories: () => Promise<any[]>;
  getProducts: () => Promise<any[]>;
  createNotification: (productID: string) => Promise<void>;
  createProduct: (productValues: any) => Promise<void>;
  currentUser?: User;
  filter: string | null;
  setFilter: (category: string | null) => void;
  setProduct: (
    product: any,
    values: {
      category: string;
      description: string;
      price: string;
      title: string;
    }
  ) => Promise<void>;
  setProductRented: (productID: any, rented: boolean) => Promise<void>;
  deleteProduct: (productID: string) => Promise<void>;
  deleteNotification: (id: string) => Promise<void>;
}

export const AuthContext = createContext<context>({
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  updateUser: () => {},
  updateUserPassword: async () => {},
  deleteUser: async () => {},
  createNotification: async () => {},
  createProduct: async () => {},
  getProductsByUserID: async (): Promise<any[]> => {
    return [];
  },
  getNotificationsByUserID: async (): Promise<any[]> => {
    return [];
  },
  getProductByID: async (): Promise<any> => {
    return;
  },
  getCategories: async (): Promise<any[]> => {
    return [];
  },
  getProducts: async (): Promise<any[]> => {
    return [];
  },
  filter: null,
  setFilter: () => Promise,
  setProduct: async () => {},
  setProductRented: async () => {},
  deleteProduct: async () => {},
  deleteNotification: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [filter, setFilter] = useState<string | null>(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in");
    } else {
      console.log("Logged out");
    }
  });

  const createProduct = async (productValues: any) => {
    const productCol = collection(db, "products");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addDoc(productCol, {
          title: productValues.title,
          price: productValues.price,
          description: productValues.description,
          category: productValues.category,
          userID: user.uid,
          image: productValues.image,
          location: productValues.location,
          phoneNumber: productValues.phoneNumber,
          rented: false,
        });
      } else {
        alert("To add a product you need to be signed in");
      }
    });
  };

  const createNotification = async (product: any) => {
    const notificationCol = collection(db, "notifications");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addDoc(notificationCol, {
          requester: user.displayName,
          productID: product.id,
          productOwnerID: product.userID,
          accepted: false,
        });
      } else {
        alert("To request a product you need to be signed in");
      }
    });
  };

  const deleteNotification = async (id: string) => {
    await deleteDoc(doc(db, "notifications", id));
  };

  const setProductRented = async (productID: string, rented: boolean) => {
    await updateDoc(doc(db, "products", productID), { rented });
  };

  const getCategories = async (): Promise<any[]> => {
    const col = collection(db, "categories");
    const docSnap = await getDocs(col);

    return docSnap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  const getProducts = async (): Promise<any[]> => {
    const colProducts = collection(db, "products");

    let querySnapshot = await getDocs(colProducts);

    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  const getProductByID = async (productID: string): Promise<any> => {
    const product = doc(db, "products", productID);
    const d = await getDoc(product);
    return {
      id: d.id,
      ...d.data(),
    };
  };

  const getNotificationsByUserID = async (userid: string): Promise<any[]> => {
    const q = query(
      collection(db, "notifications"),
      where("productOwnerID", "==", userid)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  const getProductsByUserID = async (userid: string): Promise<any[]> => {
    const q = query(collection(db, "products"), where("userID", "==", userid));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  };



  const setProduct = async (
    product: any,
    values: {
      category: string;
      description: string;
      price: string;
      title: string;
    }
  ) => {
    const col = doc(db, "products", product.id);
    await updateDoc(col, {
      category: values.category,
      description: values.description,
      price: values.price,
      title: values.title,
    });
  };

  const deleteProduct = async (productID: string) => {
    // TODO: Delete all notications
    await deleteDoc(doc(db, "products", productID));
  };

  const login = async (email: any, password: any) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: displayName });
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateUser = (info: { displayName: string }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateProfile(user, { displayName: info.displayName }).catch(() => {
          console.error("Failed to set Display Name");
        });
      }
    });
  };

  const updateUserPassword = async (info: {
    oldPassword: string;
    newPassword: string;
  }) => {
    const user = auth.currentUser;
    if (user && user.email) {
      let auth = EmailAuthProvider.credential(user.email!, info.oldPassword);
      let cred = await reauthenticateWithCredential(user, auth);
      await updatePassword(cred.user, info.newPassword);
    }
  };

  const deleteUser = async (password: string) => {
    const user = auth.currentUser;
    if (user && user.email) {
      const col = collection(db, "products");
      const q = query(col, where("userID", "==", user.uid));

      const docs = await getDocs(q);
      for (let doc of docs.docs) {
        console.log(doc);
        await deleteProduct(doc.id);
      }

      let auth = EmailAuthProvider.credential(user.email!, password);
      let cred = await reauthenticateWithCredential(user, auth);
      await cred.user.delete();
      await logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        updateUser,
        updateUserPassword,
        deleteUser,
        getProductsByUserID,
        createNotification,
        getCategories,
        getProducts,
        filter,
        setFilter,
        setProduct,
        deleteProduct,
        getProductByID,
        createProduct,
        getNotificationsByUserID,
        setProductRented,
        deleteNotification,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
