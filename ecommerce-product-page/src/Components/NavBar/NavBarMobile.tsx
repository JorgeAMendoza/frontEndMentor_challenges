import { CloseMenu } from '../Icons/CloseMenu';

interface NavBarMobileProps {
  toggleMobileNav: () => void;
}

export const NavBarMobile = ({ toggleMobileNav }: NavBarMobileProps) => {
  return (
    <nav className="navbar fixed flex top-0 left-0 bg-transparent min-h-full min-w-full">
      <div className="bg-white grow">
        <div className="flex flex-col gap-4 ml-5 mt-5">
          <button className="mb-5" onClick={toggleMobileNav}>
            <CloseMenu />
          </button>
          <a className="navbar-mobile__text" href="/">
            Collections
          </a>
          <a className="navbar-mobile__text" href="/">
            Men
          </a>
          <a className="navbar-mobile__text" href="/">
            Women
          </a>
          <a className="navbar-mobile__text" href="/">
            About
          </a>
          <a className="navbar-mobile__text" href="/">
            Contact
          </a>
        </div>
      </div>
      <div className="bg-black w-4/12 opacity-50"></div>
    </nav>
  );
};
