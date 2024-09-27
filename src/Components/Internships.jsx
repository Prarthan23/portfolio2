/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Internships = () => {
  const internships = [
    {
      company: 'Techplement',
      position: 'Front-End Intern',
      duration: 'August 2024 - September 2024',
      description: 'During This internship I implemented 2 project one solo and other one with my team in which my role was full stack , from this internship i learned about team work and how to manage time'
    },
    {
      company: 'Thats End pvt ltd.',
      position: 'ReactJs Developer',
      duration: 'January 2024 - April 2024',
      description: 'In this i learned about react and its core concepts and also learned about tailwind css and its use in react implemented one full stack project by which i learned about how things work in real world'
    },
    {
      company: 'Thats End pvt ltd.',
      position: 'ApplicationDeveloper',
      duration: 'July 2023 - August 2023',
      description: 'In this i learned about Flutter & Dart and its core concepts and also learned about how to make mobile apps'
    },
    // Add more internships as needed
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const internshipItems = sectionRef.current.querySelectorAll('.internship-item');

    // Animate internship items with subtle effects
    internshipItems.forEach((item, index) => {
      gsap.fromTo(item, 
        { 
          opacity: 0, 
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Animate card content with staggered effects
      const content = item.querySelectorAll('h3, h4, p');
      gsap.fromTo(content, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=50',
            end: 'top center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Ensure ScrollTrigger is refreshed after animations are set up
    ScrollTrigger.refresh();

  }, []);

  return (
    <section ref={sectionRef} className="internships-section bg-black text-white py-32 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-16 text-center font-poppins tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Internship Experience</h2>
        <div className="internships-container max-w-4xl lg:max-w-5xl mx-auto">
          {internships.map((internship, index) => (
            <div key={index} className="internship-item mb-12 lg:mb-16 bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-70">
              <h3 className="company text-2xl lg:text-3xl font-semibold mb-2 text-purple-100">{internship.company}</h3>
              <h4 className="position text-xl lg:text-2xl text-blue-300 mb-2">{internship.position}</h4>
              <p className="duration text-lg lg:text-xl text-gray-400 mb-4">{internship.duration}</p>
              <p className="description text-base lg:text-lg text-gray-300">{internship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;