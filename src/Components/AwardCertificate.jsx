/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AwardCertificate = () => {
  const certificates = [
    { id: 1, src: 'portfolio2/src/assets/devang mehta certificate.jpg', alt: 'Award Certificate 1' },
    { id: 2, src: 'portfolio/src/assets/devang mehta certificate2.jpg', alt: 'Award Certificate 2' }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [descriptionRef, descriptionInView] = useInView({
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  const descriptionText = "This certificate from the Dewang Mehta Foundation Trust is a Certificate of Appreciation for the \"Smart Helmet\" project from Sardar Patel College of Engineering. The project was shortlisted for the prestigious Shri Dewang Mehta IT Awards 2023, highlighting its innovation and impact in the field of Information Technology. The certificate acknowledges the efforts of Prarthan Parmar, a student involved in the project, under the guidance of Mr. Anuj Patel, the Head of the Department. The appreciation from such a notable foundation underscores the significance of the project and its potential contributions to technology and safety. The certificate features signatures from Harish Mehta, the Managing Trustee, and Jaimin Shah, a Trustee of the Dewang Mehta Foundation Trust, adding further credibility and honor to the recognition. Dated August 10, 2023, and issued in Ahmedabad, this certificate not only marks an academic and professional milestone for Prarthan but also reflects the collaborative effort and dedication of the team behind the Smart Helmet project. This recognition is a testament to the innovative spirit and technical prowess of the students at Sardar Patel College of Engineering, motivating them to continue striving for excellence in their future endeavors. Overall, this certificate serves as an inspiration for other students and budding engineers, encouraging them to pursue innovative solutions and contribute to advancements in their respective fields. It is a proud moment for all involved and sets a benchmark for future projects at the college.";

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-5xl lg:text-6xl font-bold mb-16 text-center font-poppins tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Award Certificates
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row gap-8 justify-center"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="flex-1"
            >
              <img 
                src={cert.src}
                alt={cert.alt} 
                className="w-full h-auto rounded-md max-w-full md:max-w-2xl mx-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          ref={descriptionRef}
          variants={descriptionVariants}
          initial="hidden"
          animate={descriptionInView ? "visible" : "hidden"}
          className="mt-6 text-gray-400 text-justify text-lg lg:text-xl"
        >
          {descriptionText}
        </motion.p>
      </div>
    </section>
  );
};

export default AwardCertificate;
