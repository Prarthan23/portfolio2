/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'MongoDB', level: 65 },
    { name: 'CSS', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'Java', level: 50 },
    { name: 'TypeScript', level: 50 },
  ];

  useEffect(() => {
    const skillItems = skillsRef.current.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const skillLevel = item.querySelector('.skill-level');
      gsap.fromTo(skillLevel,
        { width: 0 },
        {
          width: `${skills[index].level}%`,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
          delay: 0.4,
        }
      );
    });
  }, []);

  return (
    <section className="skills-section bg-black text-white py-32 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-5xl lg:text-6xl font-semibold mb-16 text-center font-poppins tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</h2>
        <div ref={skillsRef} className="skills-container max-w-4xl lg:max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Parallax key={skill.name} y={[20, -20]} tagOuter="div">
              <div className="skill-item mb-24 lg:mb-32 opacity-0">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold">{skill.name}</h3>
                  <span className="text-lg lg:text-xl opacity-70">{skill.level}%</span>
                </div>
                <div className="skill-bar h-3 lg:h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="skill-level h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{width: '0%'}}
                  ></div>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;