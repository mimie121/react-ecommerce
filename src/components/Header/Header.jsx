

import './Header.css';

const Header = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header-section'>
      <div className="header-des">
        <h2>Get Fresh <span>Food</span> in an Easy Way.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam minus. 
          A quaerat nulla ratione eaque, eveniet hic delectus ad placeat obcaecati et similique accusamus cum id ea dolores. Commodi!
        </p>
        <button onClick={scrollToExplore}>Place Order</button>
      </div>
    </div>
  );
};

export default Header;
