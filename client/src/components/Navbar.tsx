import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-[rgba(0,0,0,0.59)] backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[75px]">
                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[48.79px] h-[45.46px] rounded-[5px]"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        const heroHeader = document.querySelector('[alt="hero"]'); // targeting the Hero_header img by alt text
                        if (heroHeader) {
                            heroHeader.scrollIntoView({
                                behavior: 'smooth', // smooth animation
                                block: 'start',
                            });
                        }
                    }}
                />


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-white text-[19.35px] font-helvetica">
                    <Link to="/" className="hover:text-black">About Us</Link>
                    <Link to="/checkout" className="hover:text-black">Waitlist</Link>
                    <Link to="/checkout" className="hover:text-black">Cart</Link>
                    <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                        Buy
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-[rgba(0,0,0,0.59)] text-white">
                    <Link to="/" className="block py-2">About Us</Link>
                    <Link to="/checkout" className="block py-2">Waitlist</Link>
                    <Link to="/checkout" className="block py-2">Cart</Link>
                    <button className="w-full mt-2 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                        Buy
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
