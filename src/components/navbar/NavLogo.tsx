import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="text-2xl font-bold">
      {/* <img className="size-20 object-fill" src="/driveNow-logo.png" alt="Drive Now" /> */}
      <span className="text-primary">Boiler</span>Plate
    </Link>
  );
};
export default NavLogo;
