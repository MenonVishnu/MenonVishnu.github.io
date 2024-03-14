import "./Home.css";
import Logo from "../Assets/Logo.png";
// import Background from "../Assets/Background-removed.png";
import Background from "../Assets/Background-home.png";

export default function Home() {
  return (
    <div className="container">
      <div className="left">Hi, I'm Vishnu Menon</div>
      <div className="right">
        <img className="imageholder" src={Background} alt="" />
        <img className="image" src={Logo} alt="" />
      </div>
    </div>
  );
}
