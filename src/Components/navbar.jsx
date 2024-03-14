import "./navbar.css";
import Logo from "../Assets/Logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logopic" src={Logo} alt="#" />
      </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">Project</a>
        <a href="">Contact</a>
        <a href="">Experience</a>
      </div>
    </nav>
  );
}
