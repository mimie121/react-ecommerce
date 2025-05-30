import PropTypes from 'prop-types';
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { useContext,  } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => { 
  

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt={name} /> 
        {!cartItems[id]
          ? <img className='addbtn' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className="food-item-counter">
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
       </div>
       <div className="food-item-info">
          <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="rating" />
          </div>
         <p className="food-item-des">{description}</p> 
         <p className="food-item-price">${price}</p>
       </div>
    </div>
  )
}

FoodItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,     
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,      
  };

export default FoodItem
