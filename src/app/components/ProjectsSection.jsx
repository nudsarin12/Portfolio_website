"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Transportation management system",
    image: "/images/projects/end1.png",
    tag: ["All", "Web"],
    description: "	โปรเจกต์ระบบจัดการขนส่งสินค้าของสหกิจศึกษา" 
  },
  {
    id: 2,
    title: "Online Clothing Sales System Graduation Project",
    image: "/images/projects/end.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nudsarin12/Sell-shirts-online-front",
    previewUrl: "/",
    description: "ระบบขายเสื้อผ้าออนไลน์สำหรับโครงงานจบการศึกษา" 
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          MY PROJECTS
        </h2>
        
        <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="w-full"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;