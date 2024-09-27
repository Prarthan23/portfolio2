import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div variants={itemVariants} className="mb-8 md:mb-0">
            {/* <img src="/src/assets/websitelogo.svg" alt="Logo" className="w-32 h-auto mb-4" /> */}
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Prarthan Parmar</h3>
            <p className="text-gray-400">Web Developer & Designer</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 text-2xl md:text-3xl">
              <a href="https://linkedin.com/in/prarthan23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Prarthan23" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub />
              </a>
              <a href="mailto:prarthan1121@gmail.com" className="hover:text-red-400 transition-colors">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/918155849212" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Prarthan. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;