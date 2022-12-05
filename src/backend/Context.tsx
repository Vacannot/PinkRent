import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  PhoneAuthCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePhoneNumber,
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
  setDoc,
  where,
} from "firebase/firestore";
import {createContext, useContext, useState} from "react";
import {auth, db} from "./firebase";

interface context {
  signup: (
    email: string,
    password: string,
    displayName: string,
    phoneNumber: string
  ) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  getProductsByUserID: (userid: string) => Promise<any[]>;
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
  deleteProduct: (productID: string) => Promise<void>;
}

export const AuthContext = createContext<context>({
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  createNotification: async () => {},
  createProduct: async () => {},
  getProductsByUserID: async (userid: string): Promise<any[]> => {
    return [];
  },
  getProductByID: async (productID: string): Promise<any> => {
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
  deleteProduct: async () => {},
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
        });
      } else {
        prompt("To add a product you need to be signed in");
      }
    });
  };

  const createNotification = async (productID: string) => {
    const notificationCol = collection(db, "notifications");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addDoc(notificationCol, {
          userID: user.uid,
          productID: productID,
          accepted: false,
        });
      } else {
        prompt("To request a product you need to be signed in");
      }
    });
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
    await setDoc(col, {
      category: values.category,
      description: values.description,
      price: values.price,
      title: values.title,
      image: product.image,
      userID: product.userID,
    });
  };

  const deleteProduct = async (productID: string) => {
    await deleteDoc(doc(db, "products", productID));
  };

  const login = async (email: any, password: any) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signup = async (
    email: string,
    password: string,
    displayName: string,
    phoneNumber: string
  ) => {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {displayName: displayName});
    await updatePhoneNumber(
      userCredential.user,
      PhoneAuthCredential.fromJSON(phoneNumber)!
    );
    // userCredential.user.updateProfile();
    const user = userCredential.user;
    console.log(user);
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("loggedOut");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
