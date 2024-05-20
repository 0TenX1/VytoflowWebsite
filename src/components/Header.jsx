import { vytoflowLogo } from "../assets";
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <img src={vytoflowLogo} alt="VytoFlow Logo" className="logo"/>
        <div className="heading" id="home">Home</div>
        <div className="heading" id="home">Explore</div>
        <div className="heading" id="home">About</div>
        <div className="heading" id="home">Contact</div>
      </div> <hr/>
    </div>
  );
};

export default Header;
