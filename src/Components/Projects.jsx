/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [
    {
      title: "DOCVERSE",
      description: "DocVerse is a comprehensive stationary management system developed using the MERN stack. Designed primarily for educational institutions, it simplifies student access to materials through features like material requests, document uploads, and lab manual templates. Students can request specific materials, upload documents for printing, and access standardized lab manual formats. On the admin side, there's a streamlined material request management system and a print queue where uploaded documents are previewed and ordered for printing. DocVerse aims to centralize stationary needs, streamline document handling, and enhance administrative efficiency within educational settings.",
      technologies: ["React", "Node.js", "MongoDB","Express"],
      link: null
    },
    {
      title: "Online Bidding Application",
      description: "Designed for artists, the Online Bidding Application provides a platform where users can either sell or buy artwork. Sellers upload product images, details, pricing, and contact information, which are then showcased to potential buyers. Buyers can view listed products, place bids, and the highest bidder is connected with the seller. Conversely, buyers can explore available artworks, place bids, and purchase items directly by paying the specified price. This Android-based platform aims to facilitate efficient transactions, connecting artists with interested buyers seamlessly through an intuitive bidding process.",
      technologies: ["Android","Firebase"],
      link: null
    },
    {
      title: "Coursezz",
      description: "Front end project that displays a course sellling website interface by which user can checkout the course, impressive offers section, and category wise course display section",
      technologies: ["HTML","CSS","JavaScript"],
      link: "https://prarthan23.github.io/Techplement/"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-5xl lg:text-6xl font-bold mb-16 text-center font-poppins tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          My Projects
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-justify tracking-tight text-xl">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="bg-gray-800 lg:text-xl px-3 py-1 rounded-full text-sm">{tech}</li>
                ))}
              </ul>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;