import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/user_context";

const Navbar = () => {
  const history = useHistory();
  const user = useContext(UserContext);

  const handleLogout = () => {
    user.handleLogout();
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-reminder">
              Add New Reminder
            </Link>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
