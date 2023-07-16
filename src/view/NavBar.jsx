import { Link } from "react-router-dom";
import "./HomePage/homePage.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="max_width">
        <div className="logo">Demo Dashboard</div>
        <ul className="navBtns">
          <li className="nav">
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
