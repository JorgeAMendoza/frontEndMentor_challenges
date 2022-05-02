import { NavBar } from '../NavBar/NavBar';
import { UserStatus } from '../UserStatus/UserStatus';
import SneakerLogo from '../../assets/images/logo.svg';
import { MenuIcon } from '../Icons/MenuIcon';
import { useState } from 'react';

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="py-6">
      <div className="container flex items-center gap-4 pb-1 xl:border-b-2 xl:pb-10">
        <button
          onClick={() => setMobileNav(!mobileNav)}
          className="inline-block md:hidden mt-1"
          aria-label="Show mobile navigation menu."
        >
          <MenuIcon />
        </button>
        <div className="justify-self-end">
          <img src={SneakerLogo} alt="Sneaker Logo" />
        </div>
        <NavBar
          showMobileNav={mobileNav}
          toggleMobileNav={() => setMobileNav(!mobileNav)}
        />
        <UserStatus />
      </div>
    </header>
  );
};
