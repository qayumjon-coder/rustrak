import { createContext, useEffect, useState } from "react";

export const FavorContext = createContext();

const FavorProvider = ({ children }) => {
  const [favor, setFavor] = useState(() => {
    const favorite = localStorage.getItem("favorData");
    return favorite ? JSON.parse(favorite) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorData", JSON.stringify(favor));
  }, [favor]);

  const addToFavor = (product) => {
    setFavor((prevFavor) => {
      const isExist = prevFavor.find((item) => item.id === product.id);

      if(isExist) {
        return prevFavor;
      }

      return [...prevFavor, product];
    });
  };

  const removeFromFavor = (productId) => {
    setFavor((prevFavor) => prevFavor.filter((item) => item.id !== productId));
  };

  const value = {
    favor,
    addToFavor,
    removeFromFavor,
  };

  return (
    <FavorContext.Provider value={value}>{children}</FavorContext.Provider>
  );
};

export default FavorProvider;
