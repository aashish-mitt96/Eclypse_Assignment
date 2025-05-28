import logo from '../assets/logo.jpg';

const Navbar2 = () => {
  return (
    <nav className="flex items-center w-[1440px] h-[87px] justify-between px-14 py-4 backdrop-blur-[37px]">
      {/* Logo Image */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-11 object-cover rounded-md" />
      </div>

      {/* Nav Links */}
      <div className="flex space-x-20 text-gray-400 text-xl font-medium">
        <a href="#">About Us</a>
        <a href="#">Waitlist</a>
        <a href="#" className="text-black pb-1">Cart</a>
      </div>
      <div className="w-[50px] border-[2px] border-black absolute top-[61px] left-[1340px]">
        {/* content */}
      </div>

    </nav>
  );
};

export default Navbar2;
