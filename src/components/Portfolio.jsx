/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaPython } from "react-icons/fa";
import { supabase } from "@/supabase";
import { motion } from "framer-motion";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const tags = ["Machine Learning", "Computer Vision"];

  const tagColors = {
    "Machine Learning": "bg-red-500/20 text-red-700",
    "Computer Vision": "bg-green-500/20 text-green-700",
    NLP: "bg-violet-500/20 text-violet-700",
    // Add more tags and colors as needed
  };

  async function fetchProjects() {
    let { data: projects, error } = await supabase
      .from("BACTProjects")
      .select("*");

    if (error) console.log("Error fetching projects:", error);
    else return projects;
  }

  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.tag === filter);

  const getTagColor = (tag) => tagColors[tag] || "bg-gray-500";

  const buttonVariants = {
    hover: { scale: 1.1 },
    press: { scale: 0.95 },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      id="Portfolio"
      className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24 max-sm:mt-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900"
        variants={hoverVariants}
        whileHover="hover"
      >
        <span className="relative overflow-hidden">
          <span className="bg-blue-500/20 absolute bottom-0 left-0 w-full h-1/3"></span>
          Our Projects ✨
        </span>
      </motion.h2>
      <motion.p
        className="font-bad text-2xl md:text-3xl lg:text-4xl text-center mt-4 text-gray-600 mb-5 md:mb-10"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        Take a peek at our projects here!
      </motion.p>
      <div className="flex flex-col lg:flex-row items-start md:gap-8 gap-0">
        <motion.div
          className="w-full lg:w-1/4 mb-8"
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-6 text-gray-900">
            Select Category
          </h3>
          <div className="space-y-4 mb-2">
            <motion.button
              className={`${
                filter === "all" ? "" : "opacity-40"
              } bg-blue-500/20 text-blue-700 px-4 py-2 rounded-full shadow w-full font-bold`}
              onClick={() => setFilter("all")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="press"
            >
              ALL
            </motion.button>
            {tags.map((tag) => (
              <motion.button
                key={tag}
                className={`${filter === tag ? "" : "opacity-40"} ${getTagColor(
                  tag
                )} hover:opacity-90 px-4 py-2 rounded-full shadow w-full font-bold`}
                onClick={() => setFilter(tag)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="press"
              >
                {tag.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:flex-grow"
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                getTagColor={getTagColor}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function convertDriveLink(imgUrl) {
  if (!imgUrl) return "//logo.png";

  const fileId = imgUrl.split("/d/")[1].split("/view")[0];
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

function ProjectCard({ project, getTagColor }) {
  const imageUrl = convertDriveLink(project.imgUrl);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
      {/* Added transition and hover scale effect */}
      <img
        src={imageUrl}
        alt={project.name}
        className="w-full h-auto aspect-square" // Adjust width (w-3/4) as needed
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
        {project.tag && (
          <motion.p
            className={`${getTagColor(
              project.tag
            )} text-sm px-2 inline-block rounded font-semibold`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {project.tag.toUpperCase()}
          </motion.p>
        )}
        <p className="text-gray-700 mt-1 italic">{project.description}</p>
        <h3 className="text-lg font-bold text-gray-900">Tech Stack</h3>

        <div className="relative group inline-flex items-center justify-center">
          <FaPython
            size={40}
            className="mr-2 border border-gray-500 rounded-xl p-2 hover:text-white hover:bg-black transition duration-300"
          />
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-md font-medium py-1 px-3 rounded-lg">
            Python
          </span>
          <span className="absolute bottom-full mb-1 w-3 h-3 bg-black transform rotate-45 hidden group-hover:block"></span>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
