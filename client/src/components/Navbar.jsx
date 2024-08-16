import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "black", padding: "15px" }}>
        <div className="text-center">
          <Link
            to="/"
            style={{
              color: "white",
              fontSize: "25px",

              textDecoration: "none",
            }}
          >
            MERN-CRUD
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;