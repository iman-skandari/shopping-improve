import React, { useState } from "react";
import { useAuth } from "../../hooks";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CartContext } from "../../context/CartContext";

const PrivateLayout = () => {

const [cartItems,setCartItems]=useState([])



  const { username } = useAuth();

  if (!username) {
    return <Navigate to="/" />;
  }

  return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
      <div className="h-100vh flex flex-col items-center">
        <Navbar />
        <Outlet />
      </div>
    </CartContext.Provider>
  );
};

export default PrivateLayout;
