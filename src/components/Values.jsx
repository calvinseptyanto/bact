import { motion } from "framer-motion";

const Values = () => {
  // Variants for headings and paragraphs
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Variants for list items
  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Variants for continuous pulsating effect
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 2 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-8 sm:px-24 mb-12 md:mb-24"
      initial="hidden"
      animate="visible"
    >
      <hr className="border-t border-gray-600 mb-5 sm:mb-10 mt-5 sm:mt-5" />

      <div className="flex flex-col sm:flex-row items-center mb-5 sm:mb-10">
        <motion.div className="sm:flex-1 mb-0" variants={textVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 ml-4 sm:ml-8">
            Our Aim
          </h2>
        </motion.div>
        <motion.div className="sm:flex-1" variants={textVariants}>
          <p className="text-base sm:text-lg text-justify">
            Apply analytics to solve real-life business problems and increase
            the analytics competency of members, students and staff.
          </p>
        </motion.div>
      </div>
      <hr className="border-t border-gray-600 my-5 sm:my-10" />

      <div className="flex flex-col sm:flex-row items-center mb-5 sm:mb-10">
        <motion.div className="sm:flex-1 mb-0" variants={textVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 ml-4 sm:ml-8">
            Our Vision
          </h2>
        </motion.div>
        <motion.div className="sm:flex-1" variants={textVariants}>
          <p className="text-base sm:text-lg text-justify">
            To be a globally recognized, highly-competent and closely-knitted
            team supporting and promoting the widespread use of business
            analytics.
          </p>
        </motion.div>
      </div>

      <hr className="border-t border-gray-600 my-5 sm:my-10" />

      <div className="flex flex-col sm:flex-row items-center mb-5 sm:mb-10">
        <motion.div className="sm:flex-1 mb-0" variants={textVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 ml-4 sm:ml-8">
            Our Mission
          </h2>
        </motion.div>
        <motion.div className="sm:flex-1" variants={textVariants}>
          <ul className="list-disc list-inside text-base sm:text-lg text-justify">
            <li>
              To support NUS in the use of Business Analytics in real projects.
            </li>
            <li>To generate interest in Business Analytics.</li>
            <li>To nurture budding BACT members.</li>
          </ul>
        </motion.div>
      </div>
      <hr className="border-t border-gray-600 my-5 sm:my-10" />
      <div className="flex flex-col sm:flex-row items-center mb-5 sm:mb-10">
        <motion.div className="sm:flex-1 mb-0" variants={textVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 ml-4 sm:ml-8">
            Our Values
          </h2>
        </motion.div>
        <div className="sm:flex-1">
          <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
            <motion.li variants={listItemVariants}>
              <motion.span
                className="bg-red-100 text-[#ef4444] font-bold px-2 py-1 rounded shadow-md"
                variants={pulseVariants}
                animate="animate"
              >
                Integrity
              </motion.span>{" "}
              – Acting in good faith towards ourselves, NUS, clients and
              analytics partners.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <motion.span
                className="bg-orange-100 text-[#f97316] font-bold px-2 py-1  rounded shadow-md"
                variants={pulseVariants}
                animate="animate"
              >
                Innovation
              </motion.span>{" "}
              – Discovery & problem solving through analytics.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <motion.span
                className="bg-yellow-50 text-[#eab308] font-bold px-2 py-1  rounded shadow-md"
                variants={pulseVariants}
                animate="animate"
              >
                Integration
              </motion.span>{" "}
              – Service to NUS by building a vibrant, progressive and robust
              analytics community.
            </motion.li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-600 my-5 sm:my-10" />
    </motion.div>
  );
};

export default Values;
