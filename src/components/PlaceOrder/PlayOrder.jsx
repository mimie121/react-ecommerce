import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlayOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const shippingFee = getTotalCartAmount() > 0 ? 2 : 0;

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>
      <div className="order-details">
        <h3>Order Summary</h3>
        <ul>
          {food_list.map((item) => (
            cartItems[item._id] > 0 && (
              <li key={item._id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div>
                  <p className="order-item-name">{item.name} x {cartItems[item._id]}</p>
                  <p className="order-item-price">${item.price * cartItems[item._id]}</p>
                </div>
              </li>
            )
          ))}
        </ul>
        <hr />
        <div className="order-total">
          <p>Subtotal: <span>${getTotalCartAmount()}</span></p>
          <p>Delivery Fee: <span>${shippingFee}</span></p>
          <h3>Total: <span>${getTotalCartAmount() + shippingFee}</span></h3>
        </div>
      </div>
      <div className="order-form">
        <h3>Enter Your Details</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
          <button type="submit">Confirm Order</button>
        </form>
      </div>
      
    </div>
  );
};

export default PlayOrder;