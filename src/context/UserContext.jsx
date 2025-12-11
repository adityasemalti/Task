import { createContext, useContext } from "react";

export const UserContext = createContext();

const currentUser = {
  name: "Alex Developer",
  role: "Admin", 
  plan: "Free"
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
