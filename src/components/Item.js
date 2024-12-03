import "./Item.css";
import useCart from "../context/CartContext";
const Item = ({ id, name, price, image, quantity }) => {
  const { formatMoney, removeProduct, addQuantity, deleteQuantity } = useCart();
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <h3 className="head-product">Product</h3>
        <p className="name">Product Name : {name}</p>
        <p className="price">Price : {formatMoney(price)}</p>
      </div>
      <div className="quantity">
        <h3 className="head-product">Quantity</h3>
        <div className="list-quantity">
          <button className="label" onClick={() => addQuantity(id)}>
            +
          </button>
          <input type="text" value={quantity} disabled className="text-label" />
          <button className="label" onClick={() => deleteQuantity(id)}>
            -
          </button>
        </div>
      </div>
      <div className="total-price">
        <h3 className="head-product">Total</h3>
        {formatMoney(quantity * price)}
      </div>
      <div className="delete-product">
        <button className="btn-delete" onClick={() => removeProduct(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
