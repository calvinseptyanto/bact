import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sections = [
  {
    title: "Session 1",
    description: `Get ready to embark on a data-driven adventure with the NUS Business Analytics Consulting Team, where innovation, analytics, and excellence converge to shape a brighter future! 📊✨ We kick-started our 2023/24 AY journey with a meeting of conversations and boba.🍵

    Under the guidance of Professor Hong Ming, we are ready to tackle complex problems, develop innovative solutions with industry partners and most importantly, make a lasting impact on the business world .💡
    
    Stay tuned for updates on our projects, events, and industry collaborations. Let's connect, learn, and grow together! 🤝 🚀`,
    imageUrl: "src/assets/session1",
    color: "red",
    downloadUrl:
      "https://docs.google.com/presentation/d/1qovguuUUOFPg7STjsqn0pZPXbPpHPwT49p2ZWPYHzP4/edit?usp=sharing",
  },
  {
    title: "Session 2",
    description: `Exploring the art of data visualization in the realm of business analytics in our second sesion. Knowledge shared, skills honed, and insights gained. 📊💡 `,
    imageUrl: "src/assets/session2",
    color: "amber",
    downloadUrl:
      "https://docs.google.com/presentation/d/12FYVaW8ReU8_K8g_UEKM_KBnCN2BOlcS7POAyx6L_98/edit?usp=sharing",
  },
  {
    title: "Session 3",
    description: `📊 Our third session for NUS Business Analytics Consulting Team. We touched on Machine Learning algorithms and its real-world applications, ending off the session with a mini competition for best model😎. Stay tuned for more BACT insights and updates to come!`,
    imageUrl: "src/assets/session3",
    color: "green",
    downloadUrl:
      "https://docs.google.com/presentation/d/1fGYzH8Ik2CMAsktJpYMaF-_luH8c21WXTOFKz2Oytgw/edit?usp=sharing",
  },
  {
    title: "Session 4",
    description: `Exploring the power of classification and fine-tuning hyperparameters in our recent Business Analytics Consulting Team session. 📊💡`,
    imageUrl: "src/assets/session4",
    color: "blue",
    downloadUrl:
      "https://docs.google.com/presentation/d/1FHUYtlI_S4fUyNN2mfxUrJBTi87bBpW9k7TPWiBrJVI/edit?usp=sharing",
  },
  {
    title: "Session 5",
    description: `Wrapping up a successful AY23/24's semester 1 with NUS Business Analytics Consulting Team! 🚀 Our fifth session featured an insightful talk from Alteryx on data processing and visualization. Heartfelt thanks to Alteryx for the expertise shared, and a special shoutout to NUS BACT's dedicated senior and junior analysts for their active participation throughout the semester. Grateful for the teamwork and learning moments! 📊💼`,
    imageUrl: "src/assets/session5",
    color: "purple",
    downloadUrl: "",
  },
];

const colorClass = (color) => {
  switch (color) {
    case "red":
      return "bg-red-200 bg-opacity-20 text-red-700";
    case "amber":
      return "bg-yellow-200 bg-opacity-20 text-yellow-700";
    case "green":
      return "bg-emerald-200 bg-opacity-20 text-emerald-700";
    case "blue":
      return "bg-sky-200 bg-opacity-20 text-sky-700";
    case "purple":
      return "bg-purple-200 bg-opacity-20 text-purple-700";
    default:
      return "";
  }
};

const hoverVariants = {
  hover: { scale: 1.05 },
};

const PastSessions = () => {
  return (
    <motion.div
      id="PastSessions"
      className="container mx-auto px-4 py-4 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        variants={hoverVariants}
        whileHover="hover"
      >
        <span className="relative overflow-hidden">
          <span className="bg-emerald-500/20 absolute bottom-0 left-0 w-full h-1/3"></span>
          Past Sessions 🚀
        </span>
      </motion.h2>
      <motion.p
        className="font-bad text-xl md:text-3xl lg:text-4xl text-center mt-4 text-gray-600 mb-4 md:mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Navigate over to see what we've been doing so far!
      </motion.p>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-8 lg:space-y-0 mb-6 md:mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
        >
          <motion.div className="w-full lg:flex-1 lg:w-1/2 max-w-full px-6 mx-auto">
            <Carousel className="mx-4">
              <CarouselContent className="items-center -ml-1">
                {[1, 2, 3].map((imageNumber) => (
                  <CarouselItem key={imageNumber}>
                    <motion.img
                      alt={`Session 1 Image ${imageNumber}`}
                      className={`rounded-lg max-w-full h-auto object-contain border-4 ${
                        index % 2 === 0 ? "border-green-400" : "border-blue-400"
                      }`}
                      src={`${section.imageUrl}/${imageNumber}.jpeg`}
                      whileHover={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
          <div className="w-full lg:flex-1 lg:w-1/2 space-y-4 p-4">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-extrabold shadow-md ${colorClass(
                section.color
              )} mb-2 ml-2 px-4 py-2 rounded-lg inline-block`}
            >
              {section.title}
            </h2>
            <div className="text-base md:text-lg text-gray-800 mt-2 pl-2 space-y-4 text-justify leading-relaxed">
              {section.description.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
            </div>
            {section.downloadUrl && (
              <>
                <a
                  href={section.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mt-4 group"
                >
                  <span className="font-medium text-base md:text-lg ml-2">
                    Download Our Materials
                  </span>
                  <motion.span
                    className="text-lg transform"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BsArrowRight className="text-lg transform group-hover:rotate-135 transition-transform duration-300" />
                  </motion.span>
                </a>
                <div className="relative group inline-flex items-center justify-center">
                  <a
                    href={section.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 ml-4 bg-white text-black rounded-full border border-gray-400 hover:bg-black hover:text-white transition-colors duration-300 shadow-md flex items-center justify-center"
                    aria-label="Download"
                  >
                    <GoDownload
                      size={24}
                      className="text-xl group-hover:text-white"
                    />
                  </a>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-md font-medium py-1 px-3 rounded-lg">
                    Access Slides
                  </span>
                  <span className="absolute bottom-full mb-1 w-3 h-3 bg-black transform rotate-45 hidden group-hover:block"></span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PastSessions;
