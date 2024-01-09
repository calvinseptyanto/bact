import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const opacity = window.scrollY < 80 ? 1 : 0.98;
    setNavbarOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="sticky top-0 z-50 bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl py-4 px-16 md:flex md:items-center md:justify-between max-md:hidden"
        style={{ opacity: navbarOpacity }}
      >
        <img src="/logo.png" alt="Logo" className="mr-10 h-24" />
        <div className="flex space-x-4 font-medium">
          <Link
            // activeClass="bg-gradient-to-r from-blue-400 to-blue-600 text-white"
            activeClass=" border-blue-700 text-blue-700"
            to="Welcome"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="px-4 py-2 text-xl rounded-full cursor-pointer transition-all duration-300 border"
          >
            Home
          </Link>
          <Link
            activeClass=" border-emerald-700 text-emerald-700"
            to="WhoWeAre"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="px-4 py-2 text-xl rounded-full cursor-pointer transition-all duration-300  border"
          >
            Who We Are
          </Link>
          <Link
            activeClass=" border-blue-700 text-blue-700"
            to="MeetTheTeam"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="px-4 py-2 text-xl rounded-full cursor-pointer transition-all duration-300  border"
          >
            Meet The Team
          </Link>
          <Link
            activeClass=" border-emerald-700 text-emerald-700"
            to="PastSessions"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="px-4 py-2 text-xl rounded-full cursor-pointer transition-all duration-300 border"
          >
            Past Sessions
          </Link>
          <Link
            activeClass=" border-blue-700 text-blue-700"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="px-4 py-2 text-xl rounded-full cursor-pointer transition-all duration-300  border"
          >
            Projects
          </Link>
        </div>
      </nav>

      <div
        style={{ opacity: navbarOpacity }}
        className="sticky top-0 z-50 md:hidden flex items-center justify-between bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl p-4"
      >
        <img src="/logo.png" alt="Logo" className="h-12" />
        <button
          onClick={toggleSidebar}
          className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="relative min-h-full w-64 bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg z-30 rounded-l-lg">
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 p-4 z-40"
          >
            <AiOutlineClose size={24} />
          </button>

          {/* Links */}
          <div className="pt-16">
            <Link
              to="Welcome"
              spy={true}
              smooth={true}
              offset={-100}
              className="block px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              onClick={toggleSidebar}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              >
                Home
              </motion.div>
            </Link>
            <Link
              to="WhoWeAre"
              spy={true}
              smooth={true}
              offset={-75}
              className="block px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-emerald-500/20 hover:text-white"
              onClick={toggleSidebar}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              >
                Who We Are
              </motion.div>
            </Link>
            <Link
              to="MeetTheTeam"
              spy={true}
              smooth={true}
              offset={-90}
              className="block px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              onClick={toggleSidebar}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              >
                Meet The Team
              </motion.div>
            </Link>
            <Link
              to="PastSessions"
              spy={true}
              smooth={true}
              offset={-75}
              className="block px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-emerald-500/20 hover:text-white"
              onClick={toggleSidebar}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              >
                Past Sessions
              </motion.div>
            </Link>
            <Link
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-90}
              className="block px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-emerald-500/20 hover:text-white"
              onClick={toggleSidebar}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center px-4 py-2 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
              >
                Projects
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
