import Item from "./Item";
import useCart from "../context/CartContext";
const Cart = () => {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0 ? `Summary : ${formatMoney(total)}` : `No Product`}
      </h1>
      {products.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Cart;
