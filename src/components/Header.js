import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cursos" className="nav-item">
              Cursos
            </Link>
          </li>
          <li>
            <Link to="/eventos" className="nav-item">
              Próximos eventos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
