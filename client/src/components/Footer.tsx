const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#090808] text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-6"
      style={{
        position: "absolute",
        top: "5067px",
        left: "50px",
        width: "1340px",
        height: "215px",
      }}
    >
      {/* Column 1: Logo + Navigation */}
      <div className="flex flex-col w-[196px] h-[167px] gap-y-[67px]">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-semibold">Eclypse</span>
          <svg
            className="w-3 h-3 mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>

        <nav className="text-sm space-y-1">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <span>/</span>
            <a href="#" className="hover:underline">About</a>
            <span>/</span>
            <a href="#" className="hover:underline">Buy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Our Customers</a>
            <span>/</span>
            <a href="#" className="hover:underline">Contacts</a>
          </div>
        </nav>
      </div>

      {/* Column 2: Contact Info */}
      <div className="space-y-6 text-sm">
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-400">Contact</p>
          <p className="text-lg font-medium">+91 123-456-7890</p>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-400">Email</p>
          <p>eclypse@gmail.com</p>
        </div>
      </div>

      {/* Empty Columns */}
      <div></div>
      <div></div>

      {/* Scroll to Top Button */}
      <div className="absolute right-6 top-6">
        <button
          onClick={scrollToTop}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 right-6 text-xs text-gray-500">
        <p>&copy; Eclypse 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
