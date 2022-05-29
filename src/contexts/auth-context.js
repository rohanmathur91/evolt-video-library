import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const updateUser = (user) => setUser(user);

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");

    if (encodedToken) {
      axios.defaults.headers.common["authorization"] = encodedToken;
      updateUser(JSON.parse(localStorage.getItem("evolt-prime-user")));
    }
  }, []);

  const handleLogout = () => {
    updateUser(null);
    delete axios.defaults.headers.common["authorization"];
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
