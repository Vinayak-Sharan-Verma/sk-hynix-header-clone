
import { useState, useEffect } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import UtilityNav from "./UtilityNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white bg-opacity-95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <MainNav />
        <div className="flex items-center">
          <UtilityNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
