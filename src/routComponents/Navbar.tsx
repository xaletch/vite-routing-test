import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <div className="navigate">
        <Link to={"/"}>Home</Link>
        <Link to={"/settings"}>Settings</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </div>
  );
};
