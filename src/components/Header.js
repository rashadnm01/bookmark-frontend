import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">Bookmarks</h1>
        <p className="slogan">
          Helping you keep track of your favorite websites.
        </p>
      </Link>
    </nav>
  );
};

export default Header;
