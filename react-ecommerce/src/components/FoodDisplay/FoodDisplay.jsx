
import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);  

    return (
        <div className="food-display" id='food-display'>
            <h2>Our Food Menu.</h2>
            <div className="food-display-menu">
                {food_list.map((item, index) => (
                    (category === "All" || category === item.category) && (
                        <FoodItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
