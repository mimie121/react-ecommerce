import PropTypes from 'prop-types';
import './Explore.css';
import { menu_list } from '../../assets/assets';

const Explore = ({ category, setcategory }) => {
  return (
    <div className='explore-section' id='explore-section'>
      <h1>Explore Our Menu.</h1>
      <p className='explore-text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo harum rem neque sunt expedita iste placeat hic, voluptates maxime dicta aut, nobis totam repellendus, accusantium facere temporibus. Ea, rem vero!
      </p>

      <div className='explore-section-list'>
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setcategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            className='explore-item'
            key={index}
          >
            <img 
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? 'activeimg' : ''}
            />
            <p className='explore-item-title'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

Explore.propTypes = {
  category: PropTypes.string.isRequired,
  setcategory: PropTypes.func.isRequired,
};

export default Explore;
