import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="md:text-2xl font-bold md:block hidden">
      {/* <img className="size-20 object-fill" src="/driveNow-logo.png" alt="Drive Now" /> */}
      <span className="bg-gradient-purple-to-pink bg-clip-text text-transparent ">Buy</span>Bazaar
    </Link>
  );
};
export default NavLogo;
