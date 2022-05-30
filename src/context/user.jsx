import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocument,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubcribed = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubcribed;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
