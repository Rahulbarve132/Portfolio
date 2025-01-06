"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          link="/"
          src="/SpaceWebsite.png"
          title="SpaceWebsite"
          description="Developed a dynamic portfolio website using Next.js, TailwindCSS, and Three.js, showcasing a futuristic space theme. Integrated 3D animations, interactive elements, and responsive design to provide an engaging and visually stunning user experience."
        />
        <ProjectCard
          link=""
          src="/image.png"
          title="CineSense"
          description="

Developed a responsive CineSense web app using React and TailwindCSS, integrating Firebase for authentication, TMDB API, and GPT-powered search. Features include multi-language support and an immersive movie browsing experience, deployed to production. "
        />
        <ProjectCard
          link="https://ecoavenstra.vercel.app/"
          src="/image2.png"
          title="Ecoavenstra"
          description="Engineered a responsive Nike e-commerce platform using React, Redux, and Tailwind CSS, prioritizing user experience with interactive design elements and seamless shopping functionalities managed through Redux."
        />
      </div>
    </div>
  );
};

export default Projects;
