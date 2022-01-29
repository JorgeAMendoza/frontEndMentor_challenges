import { NavBar } from '../NavBar/NavBar';
import { UserStatus } from '../UserStatus/UserStatus';
import SneakerLogo from '../../assets/images/logo.svg';
import { MenuIcon } from '../Icons/MenuIcon';

export const Header = () => {
  return (
    <header className="py-4">
      <div className="container flex items-center gap-4">
        <div className="inline-block md:hidden">
          <MenuIcon />
        </div>
        <div className="justify-self-end">
          <img src={SneakerLogo} alt="Sneaker Logo" />
        </div>
        <NavBar />
        <UserStatus />
      </div>
    </header>
  );
};
