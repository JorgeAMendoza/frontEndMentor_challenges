import { useMediaQuery } from 'react-responsive';
import { NavBarDesktop } from './NavBarDesktop';
import { NavBarMobile } from './NavBarMobile';

interface NavBarProps {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}

export const NavBar = ({ showMobileNav, toggleMobileNav }: NavBarProps) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="z-10">
      {isTablet ? (
        <NavBarDesktop />
      ) : (
        showMobileNav && <NavBarMobile toggleMobileNav={toggleMobileNav} />
      )}
    </div>
  );
};
