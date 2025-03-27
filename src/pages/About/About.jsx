import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant! We take pride in serving the freshest and most delicious meals 
        prepared with high-quality ingredients. Our mission is to provide an exceptional dining experience 
        with a warm and friendly atmosphere.
      </p>
      <p>
        Whether you are here for a quick bite or a family gathering, our diverse menu offers something for everyone. 
        From classic comfort food to modern culinary delights, we strive to satisfy your cravings.
      </p>
      <h2>Our Story</h2>
      <p>
        Established in 2010, our restaurant started with a simple vision: to bring people together over great food. 
        Over the years, we have grown into a beloved spot for our community, offering not just meals, but memories.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Fresh and locally sourced ingredients</li>
        <li>Exceptional customer service</li>
        <li>Commitment to quality and innovation</li>
        <li>A welcoming and inclusive environment</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have any questions? Reach out to us at <strong>contact@restaurant.com</strong> or visit us at our location.
      </p>
    </div>
  );
};

export default About;
