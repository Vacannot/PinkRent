import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
import {createContext, useContext, useState} from "react";
import {auth, db} from "./firebase";

interface context {
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  getProductsByUserID: (userid: string) => Promise<any[]>;
  createNotification: (productID: string) => Promise<void>;
  currentUser?: User;
}

export const AuthContext = createContext<context>({
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  createNotification: async () => {},
  getProductsByUserID: async (userid: string): Promise<any[]> => {
    return [];
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [currentUser, setCurrentUser] = useState<User>();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in");
    } else {
      console.log("Logged out");
    }
  });

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

  const signup = async (email: any, password: any) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
