import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Assuming currentYear is defined somewhere in your component
const currentYear = new Date().getFullYear();

const Footer = () => {
  const hoverVariants = {
    hover: { y: -5, transition: { yoyo: Infinity, duration: 0.5 } },
  };
  return (
    <footer className="bg-white text-gray-900 py-4 sm:py-6 shadow-2xl border-t-[0.5px] border-black pb-8">
      <div className="container mx-auto px-4 sm:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
          {/* Logo and copyright for desktop */}
          <motion.div
            className="sm:order-1"
            whileHover={{ y: -10 }} // 3D effect on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 mx-auto sm:mx-0" // Removed transform class
              src="/logo.png"
              alt="logo"
            />
            <p className="hidden sm:block text-sm sm:text-md mt-2">
              © {currentYear} NUS Business Analytics Consulting Team
            </p>
          </motion.div>
          {/* Description, contact, and social media icons */}
          <div className="max-w-md sm:order-2 mt-1 md:mt-6 sm:mt-0">
            {/* Address and description */}
            <p className="text-sm sm:text-md px-8 sm:px-0 font-bold">
              <IoLocationOutline className="inline mr-2" size={18} />
              15 Kent Ridge Drive NUS Business School #08-02
            </p>
            <p className="text-sm sm:text-md mt-2">
              NUS Business Analytics Consulting Team is a group of students
              consultants supported by the Department of Analytics and Operation
              (DAO) under NUS Business School, dedicated to providing business
              analytics consulting services to any organizations.
            </p>
            {/* Contact email */}
            <p className="text-sm sm:text-md mt-2 font-bold">
              Contact us (Email):
            </p>
            <p>
              <motion.span
                className="relative inline-block"
                variants={hoverVariants}
                whileHover="hover"
              >
                <a href="mailto:bactnus@gmail.com" className="text-sky-600">
                  <span className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-500/10"></span>
                  bactnus@gmail.com
                </a>
              </motion.span>
              .
            </p>
            {/* Social media icons */}
            <div className="flex justify-center sm:justify-start mt-4">
              {/* Adjust social media icons for mobile */}
              <a
                target="_blank"
                href="https://www.instagram.com/nus_bact/"
                className="text-lg mr-2 sm:mr-4"
                rel="noreferrer"
              >
                <FaInstagram
                  size={36}
                  className="mr-2 border border-gray-500 rounded-xl p-2 hover:text-white hover:bg-black transition duration-300"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/nusbact/"
                className="text-lg mr-2 sm:mr-4"
                rel="noreferrer"
              >
                <FaLinkedinIn
                  size={36}
                  className="mr-2 border border-gray-500 rounded-xl p-2 hover:text-white hover:bg-black transition duration-300"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/nusbact/"
                className="text-lg"
                rel="noreferrer"
              >
                <FaFacebook
                  size={36}
                  className="mr-2 border border-gray-500 rounded-xl p-2 hover:text-white hover:bg-black transition duration-300"
                />
              </a>
            </div>
          </div>
          {/* Copyright text for mobile */}
          <div className="sm:hidden w-full order-last text-sm mt-4">
            © {currentYear} NUS Business Analytics Consulting Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
