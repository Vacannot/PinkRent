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
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { auth, db } from "./firebase";

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
  getCategories: () => Promise<any[]>;
  createNotification: (productID: string) => Promise<void>;
  currentUser?: User;
  getNotificationsByUserID: (productID: string) => Promise<void[]>;
}

export const AuthContext = createContext<context>({
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  createNotification: async () => {},
  getProductsByUserID: async (userid: string): Promise<any[]> => {
    return [];
  },
  getCategories: async (): Promise<any[]> => {
    return [];
  },
  getNotificationsByUserID: async (userid: string): Promise<any[]> => {
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

  const getNotificationsByUserID = async (userid: string): Promise<any[]> => {
    const q = query(
      collection(db, "notifications"),
      where("userID", "==", userid)
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
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: displayName });
        updatePhoneNumber(
          userCredential.user,
          PhoneAuthCredential.fromJSON(phoneNumber)!
        ).then(() => {
          console.log("Updated phone number");
        });
        // userCredential.user.updateProfile();
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
        getCategories,
        getNotificationsByUserID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
