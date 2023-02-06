import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link className="btn btn-primary" to="/">
        главная
      </Link>
      <Link className="btn btn-secondary mx-4" to="/products">
        товары
      </Link>
    </nav>
  );
};

export default Nav;
