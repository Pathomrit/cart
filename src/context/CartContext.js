import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import CartReducer from "../reducer/CartReducer";
// create context
const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function addQuantity(id) {
    // console.log("addProduct : " + id);
    dispatch({ type: "ADD", payload: id });
  }
  function deleteQuantity(id) {
    // console.log("delete : " + id);
    dispatch({ type: "REMOVE", payload: id });
  }
  function removeProduct(id) {
    // console.log("delete : " + id);
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  }
  useEffect(() => {
    // console.log("summary");
    dispatch({ type: "CAL_TOTAL" });
  }, [state.products]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        formatMoney,
        removeProduct,
        addQuantity,
        deleteQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
