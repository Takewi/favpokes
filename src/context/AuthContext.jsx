import { createContext, useState, useEffect } from "react";

// Cria o contexto de autenticação
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Provedor do contexto de autenticação
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // Estado para armazenar as informações do usuário
  const [user, setUser] = useState(null);

  // Estado para armazenar a lista de favoritos
  const [favorites, setFavorites] = useState([]);

  // Carrega favoritos do localStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Função para realizar o login
  const login = (userData) => {
    setUser(userData);
  };

  // Função para realizar o logout
  const logout = () => {
    setUser(null);
  };

  // Função para adicionar/remover favoritos
  const toggleFavorite = (pokemon) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === pokemon.id)) {
      // Se já é favorito, remove
      updatedFavorites = favorites.filter((fav) => fav.id !== pokemon.id);
    } else {
      // Adiciona como favorito
      updatedFavorites = [...favorites, pokemon];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Salva no localStorage
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, favorites, toggleFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
