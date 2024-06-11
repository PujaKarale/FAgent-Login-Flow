import { createContext,useState } from "react";

export const Context=createContext()

export const UserProvider = ({ children }) => {
    // const [theme, setTheme] = useState(themes.light);
    const[user,setUser]=useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [kycCompleted, setKycCompleted] = useState(false);

    return (
      <Context.Provider value={{ user,setUser,isLoggedIn,setIsLoggedIn,kycCompleted,setKycCompleted }}>
        {children}
      </Context.Provider>
    );
  };