import SignUp from "../signUp/SignUp";
import logo from "../../assets/images/logo.svg";
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <SignUp />
      <img src={logo} className="logo" alt="logotipo Fylo" />
      <div className="content">
        <div className="location">
          <img src={location} alt="icono de localización" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex">
          <div className="phone">
            <img src={phone} alt="icono de teléfono" />
            <p className="address">+1-543-123-4567</p>
          </div>
          <div className="email">
            <img src={email} alt="icono de email" />
            <p className="address">example@fylo.com</p>
          </div>
        </div>

        <div className="firstGroupLinks">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="secondGroupLinks">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="socialMedia">
          <img src={facebook} alt="logo de facebook" />
          <img src={twitter} alt="logo de twitter" />
          <img src={instagram} alt="logo de instagram" />
        </div>
      </div>
    </section>
  );
};
export default Footer;
