import "./Header.css";
import useCart from "../context/CartContext";
const Header = () => {
  const {amount} = useCart();
  return (
    <header>
      <p>Shopping Cart</p>
      <p>Product : {amount}</p>
    </header>
  );
};
export default Header;
