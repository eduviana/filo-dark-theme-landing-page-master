import logo from "../../assets/images/logo.svg"
import "./Navbar.scss";


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo">
            <img src={logo} alt="logo" />
        </a>

        <ul className="links">
            <li className="link">Features</li>
            <li className="link">Team</li>
            <li className="link">Sign In</li>
        </ul>
    </nav>
  )
}
export default Navbar