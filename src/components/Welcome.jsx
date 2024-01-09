import Lottie from "lottie-react";
import animationData from "/public/chart.json"; // Adjust this path to your Lottie file
import businessReport from "/business-report.svg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Welcome = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants for the heading
  const headingVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { rotate: 10, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Animation for continuous hover
  const hoverVariants = {
    hover: { y: -5, transition: { yoyo: Infinity, duration: 0.5 } },
  };

  const hoverStyle = {
    scale: 1.1, // Scale the element to 110% of its size when hovered
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <div
      id="Welcome"
      className="container mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <motion.div
        className="flex-col space-y-4 md:space-y-8 max-w-lg px-4 md:px-0 max-sm:mt-8"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <motion.h1
          className="text-center sm:text-left text-4xl md:text-6xl font-medium md:font-extrabold leading-normal"
          variants={headingVariants}
        >
          <motion.span variants={headingVariants}>Welcome To</motion.span>
          <br />
          <motion.span
            className="gradient-text-business"
            variants={headingVariants}
          >
            Business Analytics
          </motion.span>
          <br />
          <motion.span
            className="gradient-text-consulting"
            variants={headingVariants}
          >
            Consulting Team
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-left text-md md:text-lg font-medium text-gray-600 leading-loose"
          variants={headingVariants}
        >
          BACT is open to consulting business analytics-related projects and
          issues. If you or your company is interested, do drop us an email at{" "}
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
        </motion.p>
        <motion.p
          className="text-center md:text-left text-2xl md:text-4xl font-semibold cursor-pointer font-bad"
          whileHover={hoverStyle} // Apply hover styles
          onClick={() => {
            const element = document.getElementById("WhoWeAre");
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }}
        >
          Find out more about us 🤩
          <MdKeyboardDoubleArrowDown className="inline-block ml-2 animate-bounce" />
        </motion.p>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 mt-4 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {isMobileView ? (
          <img
            src={businessReport}
            alt="Business Report"
            className="w-full max-h-64 md:max-h-full"
          />
        ) : (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full max-h-64 md:max-h-full mb-20"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Welcome;
