import "./Navbar.scss";
import logo from "../../assets/logo.png";
import teacherImg from "../../assets/teacher.png";
import studentImg from "../../assets/students.png";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const [direction, setDirection] = useState("");
  const [show, setShow] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogin = () => {
    setDirection("login");
    if (show && direction === "login") {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleSignup = () => {
    setDirection("signup");
    if (show && direction === "signup") {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleLogout = () => {
    logout()
  };

  return (
    <nav className="container">
      <div className="navigation">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul>
          {user && <li>Hello, {user.email}</li>}
          {!user && <li onClick={handleSignup}>Sign up</li>}
          {!user && <li onClick={handleLogin}>Login</li>}

          {user && (
            <li onClick={handleLogout}>
              <Link to="/">Logout</Link>
            </li>
          )}
        </ul>

        {show && (
          <div className="redirect">
            <Link
              to={`/${direction}/teacher`}
              onClick={() => setShow(false)}
              className="teacher"
            >
              <img src={teacherImg} alt="" />
              <p>Teacher {direction}</p>
            </Link>
            <Link
              to={`/${direction}/student`}
              onClick={() => setShow(false)}
              className="student"
            >
              <img src={studentImg} alt="" />
              <p>Student {direction}</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
