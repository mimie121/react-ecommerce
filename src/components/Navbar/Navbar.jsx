

import './Navbar.css';
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState(location.pathname); 

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <nav className="navbar-section">
      <div className="navbar-logo">
        <Link to="/" onClick={() => handleSetActive('/')}>
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleSetActive('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleSetActive('/about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={activeLink === '/services' ? 'active' : ''}
            onClick={() => handleSetActive('/services')}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === '/contact' ? 'active' : ''}
            onClick={() => handleSetActive('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        {/* <img className='search-icon' src={assets.search_icon} alt="Search Icon" /> */}
        <div className="navbar-search-icon">
          <Link to='/Cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
