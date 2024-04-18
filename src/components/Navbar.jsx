import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    setAuth('');
    navigate("/login");
  }

  return (
    <nav>
      {auth ? (
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
          <li>
            <Link to="/create-movie">Create movie</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
