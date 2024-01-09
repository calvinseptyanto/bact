import { motion } from "framer-motion";

const WhoWeAre = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      id="WhoWeAre"
      className="flex justify-center items-center mx-4 md:mx-16 lg:mx-64 mt-0 md:mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center p-4 md:p-8 lg:p-10">
        <motion.h2
          className="text-4xl lg:text-6xl font-bold mb-8 relative inline-block"
          variants={hoverVariants}
          whileHover="hover"
        >
          <span className="relative overflow-hidden">
            <motion.span
              className="bg-emerald-500/20 absolute bottom-0 left-0 w-full h-1/3"
              variants={itemVariants}
            ></motion.span>
            Who Are We? 🧐
          </span>
        </motion.h2>
        <motion.p
          className="font-mulish text-base md:text-xl"
          variants={itemVariants}
        >
          <span className="font-bold">NUS</span>{" "}
          <span className="font-bold gradient-text-business">
            Business Analytics
          </span>{" "}
          <span className="font-bold gradient-text-consulting">
            Consulting Team
          </span>{" "}
          is a group of students in various specializations who are passionate
          about learning and advancing business analytics with real-world
          projects beyond the classroom, through knowledge sharing among
          students, alumni, and the teaching faculty.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;
