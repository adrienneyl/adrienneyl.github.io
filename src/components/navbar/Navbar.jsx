import react from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Adrienne Leung</h1>
      </div>
      <div className="navbar_buttons">
        <Link to ="/">
          <button>portfolio</button>
        </Link>
        <Link to="/about">
          <button>about</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;