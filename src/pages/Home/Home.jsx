

import './Home.css';
import Header from '../../components/Header/Header';
import Explore from '../../components/ExploreSection/Explore';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { AppDownload } from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Explore category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
