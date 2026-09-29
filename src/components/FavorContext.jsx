import { useEffect, useState } from "react";

const FavorContext = ({children}) => {
  const [favor, setFavor] = useState(() => {
      const favorite = localStorage.getItem("favorData");
      return favorite ? JSON.parse(favorite) : [];
    });
  
    useEffect(() => {
      localStorage.setItem("favorData", JSON.stringify(favor));
    }, [favor]);
  
    const addToFavor = (product) => {
      setFavor((prevCart) => [...prevCart, product]);
    };
  
    const removeFromFavor = (productId) => {
      setFavor((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
  
    const value = {
      favor,
      addToFavor,
      removeFromFavor,
    };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default FavorContext