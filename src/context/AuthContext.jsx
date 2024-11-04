// src/context/AuthContext.jsx
import { createContext, useState } from "react";

// Cria o contexto de autenticação
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Provedor do contexto de autenticação
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // Estado para armazenar as informações do usuário
  const [user, setUser] = useState(null);

  // Função para realizar o login
  const login = (userData) => {
    setUser(userData);
  };

  // Função para realizar o logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
