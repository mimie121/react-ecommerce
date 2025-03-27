import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img className='footer-logo' src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, error aliquam. Et rem impedit explicabo quaerat laborum inventore deserunt nesciunt delectus perspiciatis nihil illo consequuntur numquam nisi, mollitia vero autem!</p>
              <div className="footer-socials-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
              </div>
            </div>

            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               </ul>

            </div>

            <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+1 222-333-444</li>
                    <li>talk2mimie.reply@gmail.com</li>
                    <li>Find Us On Google</li>
                 </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 © FoodResturant.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer