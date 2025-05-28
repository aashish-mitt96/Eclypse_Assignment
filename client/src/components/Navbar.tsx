import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const logoRef = useRef(null);

    const handleLogoClick = () => {
        const heroHeader = document.querySelector('[alt="hero"]');
        if (heroHeader) {
            heroHeader.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    return (
        <nav className="w-full fixed top-0 z-50 bg-[rgba(0,0,0,0.59)] backdrop-blur-md h-[112px] md:h-[75px]">
  <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between flex-wrap">
    {/* Logo */}
    <img
      ref={logoRef}
      src={logo}
      alt="Logo"
      className={`w-[440px] h-[112px] rounded-[5px] cursor-pointer md:w-[60.79px] md:h-[45.46px] ${isAnimating ? 'animate-scale-up' : ''}`}
      onClick={handleLogoClick}
    />

    {/* Menu */}
    <div className="flex flex-wrap md:gap-12 items-center gap-36 text-white text-[19.35px] font-helvetica">
      <Link to="/" className="hover:text-black">About Us</Link>
      <Link to="/checkout">Waitlist</Link>
      <Link to="/checkout" className="hover:text-black">Cart</Link>
      <button className="bg-white md:-ml-4 text-black px-10 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
        Buy
      </button>
    </div>
  </div>
</nav>

    );
};

export default Navbar;
