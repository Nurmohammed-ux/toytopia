import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState(() => {
    const savedToys = localStorage.getItem("myToysCollection");
    return savedToys ? JSON.parse(savedToys) : [];
  });

  useEffect(() => {
    (localStorage.setItem("myToysCollection", JSON.stringify(myToys)),
      [myToys]);
  });

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile)
      .then(() => {
        setUser({ ...auth.currentUser, ...profile });
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const addToMyToys = (toy) => {
    const exists = myToys.find((t) => t.toyId === toy.toyId);
    if (!exists) {
      setMyToys([...myToys, toy]);
      return true;
    }
    return false;
  };

  const removeFromMyToys = (toyId) => {
    const remainingToys = myToys.filter((t) => t.toyId !== toyId);
    setMyToys(remainingToys);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    myToys,
    createUser,
    signInUser,
    updateUserInfo,
    signInWithGoogle,
    forgetPassword,
    addToMyToys,
    removeFromMyToys,
    logOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
