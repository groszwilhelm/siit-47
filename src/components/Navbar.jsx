import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">
          Movie List
        </Link>
      </li>
      <li>
        <Link to="/create-movie">
          Create movie
        </Link>
      </li>
    </ul>
  )
}

export default Navbar;
