import { NavBar } from '../NavBar/NavBar';
import { UserStatus } from '../UserStatus/UserStatus';
import SneakerLogo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header>
      <div>
        <img src={SneakerLogo} alt="Sneaker Logo" />
      </div>
      <NavBar />
      <UserStatus />
    </header>
  );
};
