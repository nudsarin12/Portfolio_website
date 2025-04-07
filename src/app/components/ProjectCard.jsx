import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full">
      <div className="group relative h-72 md:h-96 rounded-t-xl overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />    
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          {gitUrl && (
            <Link 
              href={gitUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ADB7BE] hover:text-white transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
          )}
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;