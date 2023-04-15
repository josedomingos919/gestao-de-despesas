import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext({
  user: null,
});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  return context;
};
