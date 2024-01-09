import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const presMembers = [
  {
    name: "Chen Jia Wei",
    role: "President",
    description: `📚 Y3 Business Analytics
      🌟 Currently on Internship
      🐶 Has a cute doggo at home`,
    linkedinUrl: "https://www.linkedin.com/in/jiaawei/",
    instagramUrl: "https://www.instagram.com/jiaawe/",
    imageUrl: "src/assets/team/Jia Wei.jpg",
  },
  {
    name: "Ding Xuan Seah",
    role: "Vice President",
    description: `📚 Y3 Business Analytics
     🎒 On internship
     🍜 Can only take xiao la`,
    linkedinUrl: "https://www.linkedin.com/in/ding-xuan-seah/",
    instagramUrl: "https://www.instagram.com/dxseah2/",
    imageUrl: "src/assets/team/Ding Xuan.png",
  },
  {
    name: "Jason Zhi Hao Loh",
    role: "Vice President",
    description: `📚 Y3 Business Analytics
    🏸 Plays Badminton
    🍲 Tomyum lover`,
    linkedinUrl: "https://www.linkedin.com/in/zhi-hao-lo/",
    instagramUrl: "https://www.instagram.com/lorddzhihao/",
    imageUrl: "src/assets/team/Jason.png",
  },
];

const genSecMembers = [
  {
    name: "Ezra Tio",
    role: "Head Gen-Sec",
    description: `📚 Y3 Computer Science
    🤚 Left-handed
    🎹 Plays the piano`,
    linkedinUrl: "https://www.linkedin.com/in/ezra-tio-52a4a5142/",
    instagramUrl: "https://www.instagram.com/ezra.a.a.a.a/",
    imageUrl: "src/assets/team/Ezra Tio.jpeg",
  },
  {
    name: "Phuong Ha",
    role: "Gen-Sec",
    description: `📚 Y2 Business Analytics
    🎤 Love singing (w the bad voice)
    🚫 Don't let CS mods defeat u :’)`,
    linkedinUrl: "https://www.linkedin.com/in/ha-phuong-b83ba3234/",
    instagramUrl: "https://www.instagram.com/cth_phuong/",
    imageUrl: "src/assets/team/Ha Phuong.jpg",
  },
  {
    name: "Beverly Teo",
    role: "Gen-Sec",
    description: `📚 Y2 Business Analytics
    🏡 Currently staying at RC4
    🍽️ Slow eater but fast walker`,
    linkedinUrl: "https://www.linkedin.com/in/beverleyteo/",
    instagramUrl: "https://www.instagram.com/bever_leyteo/",
    imageUrl: "src/assets/team/Beverley Teo.jpeg",
  },
  {
    name: "Jolene Seng",
    role: "Gen-Sec",
    description: `📚 Y2 BBA
    🍳 I like to cook!`,
    linkedinUrl: "https://www.linkedin.com/in/jolene-seng/",
    instagramUrl: "https://www.instagram.com/icbitsjo/",
    imageUrl: "src/assets/team/Jolene.png",
  },
];

const pubsMembers = [
  {
    name: "Petrina Koh Ling Xuan",
    role: "Publicity",
    description: `📚 Y2 BBA
    🍵 Love tea (All kind of tea🤡)
    🐀 Wants a pet rat :’)`,
    linkedinUrl: "https://www.linkedin.com/in/petrinakohlx/",
    instagramUrl: "https://www.instagram.com/petrinaaa.koh/",
    imageUrl: "src/assets/team/Petrina.png",
  },
  {
    name: "Ryan Darius Lim",
    role: "Publicity",
    description: `📚 Y1 Business Analytics
    🏡 Stays in Eusoff Hall
    🎶 Loves listening to rock (plays the bass amateurly)`,
    linkedinUrl: "https://www.linkedin.com/in/ryan-darius-lim/",
    instagramUrl: "https://www.instagram.com/quadryan/",
    imageUrl: "src/assets/team/Ryan Darius Lim.jpeg",
  },
  {
    name: "Hye Won",
    role: "Publicity",
    description: `📚 Y2 BBA
    🏡 Staying at UTR
    🖌️ Likes doodling`,
    linkedinUrl: "https://www.linkedin.com/in/hyewon-jang-18a683262/",
    instagramUrl: "https://www.instagram.com/hyehanaa/",
    imageUrl: "src/assets/team/HyeWon.png",
  },
];

const MeetTheTeam = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");

  const handleFilter = (group) => {
    setSelectedGroup(group);
  };

  const getButtonClass = (group) => {
    const baseClass =
      "px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base font-bold";
    const selectedClass = "opacity-100";
    const nonSelectedClass = "opacity-50";

    return `${baseClass} ${
      selectedGroup === group ? selectedClass : nonSelectedClass
    }`;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    press: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const iconRotation = {
    animate: {
      rotate: 360,
      transition: { ease: "linear", duration: 1 },
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
      id="MeetTheTeam"
      className="mx-4 sm:mx-12 md:mx-16 lg:mx-24 max-sm:mt-4 mb-16 md:mb-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        variants={hoverVariants}
        whileHover="hover"
      >
        <span className="relative overflow-hidden">
          <motion.span
            className="bg-blue-500/20 absolute bottom-0 left-0 w-full h-1/3"
            variants={itemVariants}
          ></motion.span>
          Meet The Team 🧑‍🤝‍🧑
        </span>
      </motion.h2>
      <motion.p
        className="font-bad text-2xl md:text-3xl lg:text-4xl text-center mt-4 text-gray-600 mb-4 md:mb-10"
        variants={containerVariants}
      >
        Get to know the people behind BACT!
      </motion.p>
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8 px-4">
        <motion.button
          onClick={() => handleFilter("all")}
          className={`${getButtonClass(
            "all"
          )} bg-rose-500/20 text-rose-500 shadow-md hover:opacity-100`}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
        >
          All
        </motion.button>
        <motion.button
          onClick={() => handleFilter("pres")}
          className={`${getButtonClass(
            "pres"
          )} bg-orange-500/20 text-orange-500 shadow-md hover:opacity-100`}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
        >
          President & VPs
        </motion.button>
        <motion.button
          onClick={() => handleFilter("gensec")}
          className={`${getButtonClass(
            "gensec"
          )} bg-violet-500/20 text-violet-500 shadow-md hover:opacity-100`}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
        >
          General Secretary
        </motion.button>
        <motion.button
          onClick={() => handleFilter("pubs")}
          className={`${getButtonClass(
            "pubs"
          )} bg-indigo-500/20 text-indigo-500 shadow-md hover:opacity-100`}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
        >
          Publicity
        </motion.button>
      </div>

      {selectedGroup === "all" || selectedGroup === "pres" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-8">
          {presMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-auto aspect-square"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {member.name}
                    </h3>
                    <h4 className="text-md md:text-lg text-gray-600">
                      {member.role}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <motion.a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2 mr-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#0e76a8" }} // LinkedIn hover effect
                    >
                      <FaLinkedinIn size={20} />
                    </motion.a>
                    <motion.a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#E1306C" }} // Instagram hover effect
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-3 text-gray-700">
                  {member.description.split("\n").map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : null}
      {selectedGroup === "all" || selectedGroup === "gensec" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-8">
          {genSecMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-auto aspect-square"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {member.name}
                    </h3>
                    <h4 className="text-md md:text-lg text-gray-600">
                      {member.role}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <motion.a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2 mr-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#0e76a8" }} // LinkedIn hover effect
                    >
                      <FaLinkedinIn size={20} />
                    </motion.a>
                    <motion.a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#E1306C" }} // Instagram hover effect
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-3 text-gray-700">
                  {member.description.split("\n").map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : null}
      {selectedGroup === "all" || selectedGroup === "pubs" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-8">
          {pubsMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-auto aspect-square"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {member.name}
                    </h3>
                    <h4 className="text-md md:text-lg text-gray-600">
                      {member.role}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <motion.a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2 mr-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#0e76a8" }} // LinkedIn hover effect
                    >
                      <FaLinkedinIn size={20} />
                    </motion.a>
                    <motion.a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-500 rounded-full p-2"
                      variants={iconRotation}
                      animate="animate"
                      whileHover={{ scale: 1.1, color: "#E1306C" }} // Instagram hover effect
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-3 text-gray-700">
                  {member.description.split("\n").map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
};

export default MeetTheTeam;
