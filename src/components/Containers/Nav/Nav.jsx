import { useEffect } from "react";
import { Link, useParams, useHref, useLocation } from "react-router-dom";

const navPath = [
  {
    path: "/",
    text: "главная",
  },
  {
    path: "/products",
    text: "товары",
  },
  {
    path: "/user",
    text: "юзер",
  },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav style={{ marginBottom: "20px" }}>
      {navPath.map(({ path, text }) => (
        <Link
          key={path}
          style={{ marginRight: "15px" }}
          className={`btn ${
            location.pathname === path ? "btn-info" : "btn-warning"
          }`}
          to={path}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
