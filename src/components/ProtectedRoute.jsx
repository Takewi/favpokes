import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Se o usuário não estiver autenticado, redireciona para a página de Login
    return <Navigate to="/login" replace />;
  }

  // Se estiver autenticado, renderiza o componente filho
  return children;
};

export default ProtectedRoute;
