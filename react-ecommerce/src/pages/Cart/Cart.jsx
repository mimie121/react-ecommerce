

import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const shippingFee = getTotalCartAmount() > 0 ? 2 : 0;
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index} className='cart-items-item'>
                <img src={item.image} alt={item.name} className='cart-item-image'/>
                <p className='cart-item-name'>{item.name}</p>
                <p className='cart-item-price'>${item.price}</p>
                <p className='cart-item-quantity'>{cartItems[item._id]}</p>
                <p className='cart-item-total'>${item.price * cartItems[item._id]}</p>
                <button className='cart-item-remove' onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-details">
               <p>Subtotal</p>
               <p>${getTotalCartAmount()}</p>
            </div>
               <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>${shippingFee}</p>
            </div>
              <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + shippingFee}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/PlayOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here.</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;