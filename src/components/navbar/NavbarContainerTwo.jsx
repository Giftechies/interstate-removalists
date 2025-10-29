
import MobileNavbar from "./MobileNavbar";
import DeskTopNavbarTwo from "./DeskTopNavbarTwo";

const NavbarContainerTwo = ({menu}) => {
  return (
    <div className="relative w-full">
      <DeskTopNavbarTwo navbar={menu}  />
      <MobileNavbar navbarData={menu} />
    </div>
  );
};

export default NavbarContainerTwo;
