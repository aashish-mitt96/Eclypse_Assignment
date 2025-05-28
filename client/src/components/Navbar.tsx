import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const logoRef = useRef(null);

  const handleLogoClick = () => {
    const heroHeader = document.querySelector('[alt="hero"]');
    if (heroHeader) {
      heroHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[rgba(0,0,0,0.59)] backdrop-blur-md h-[112px] md:h-[75px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-12 flex-wrap">
        {/* Logo */}
        <img ref={logoRef} src={logo} alt="Logo" className={`cursor-pointer rounded-[5px] w-[200px] max-w-full h-[60px] md:w-[60.79px] md:h-[45.46px] ${isAnimating ? 'animate-scale-up' : ''}`} onClick={handleLogoClick}/>
        {/* Menu */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12 text-white font-helvetica text-sm md:text-[19.35px]">
          <Link to="/checkout"> About Us</Link>
          <Link to="/checkout"> Waitlist</Link>
          <Link to="/checkout"> Cart</Link>
          <button className="bg-white md:-ml-4 px-6 py-2 rounded-md font-semibold text-black hover:bg-gray-200 transition whitespace-nowrap">
            Buy
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
