import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

const Services = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const servicesList = [
    { 
      title: 'Full Stack Development', 
      description: 'End-to-end web application development using modern technologies.', 
      extendedDescription: 'Leverage my expertise in both front-end and back-end technologies to create robust, scalable, and efficient web applications. From conceptualization to deployment, I ensure a seamless development process that meets your specific business needs.',
      icon: '💻' 
    },
    { 
      title: 'App Development', 
      description: 'Creating mobile applications for iOS and Android platforms.', 
      extendedDescription: 'Develop cutting-edge mobile applications that provide exceptional user experiences across iOS and Android platforms. Utilizing the latest frameworks and best practices, I create responsive, feature-rich apps that engage and delight users.',
      icon: '📱' 
    },
    { 
      title: 'Frontend Design', 
      description: 'Designing intuitive and visually appealing user interfaces.', 
      extendedDescription: 'Craft visually stunning and user-centric frontend designs that enhance user engagement and satisfaction. My design process focuses on creating intuitive layouts, cohesive color schemes, and smooth interactions that align with your brand identity and user expectations.',
      icon: '🎨' 
    },
    { 
      title: 'API Integration', 
      description: 'Seamlessly connecting your applications with third-party services.', 
      extendedDescription: 'Integrate your applications with a wide range of third-party APIs and services to extend functionality and improve efficiency. From payment gateways to social media platforms, I ensure smooth data flow and optimal performance in all integrations.',
      icon: '🔗' 
    },
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

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const handleInquire = () => {
    window.open('https://wa.me/918155849212', '_blank');
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
          My Services
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={`grid ${isDesktop ? 'grid-cols-2 gap-8' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}`}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${isDesktop ? 'flex flex-col justify-between' : ''}`}
            >
              <div>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white animate-gradient-x">{service.title}</h3>
                <p className="text-gray-300 text-justify tracking-tighter lg:tracking-tight  text-lg mb-6">
                  {isDesktop ? service.extendedDescription : service.description}
                </p>
              </div>
              <button
                onClick={handleInquire}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center mt-auto "
              >
                <FaWhatsapp className="mr-2 " /> Inquire Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;