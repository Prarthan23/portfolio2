// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    gsap.set(menuRef.current, { x: '100%' });
  }, []);

  const toggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);
    gsap.to(menuRef.current, {
      x: newIsMenuOpen ? '0%' : '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    gsap.to(menuRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    });
  };

  const handleMenuItemHover = (index) => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      const chars = menuItemsRef.current[index].querySelectorAll('.char');
      gsap.fromTo(chars, 
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.25,
          ease: 'power2.out'
        }
      );
    }
  };

  const handleMenuItemLeave = (index) => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      const chars = menuItemsRef.current[index].querySelectorAll('.char');
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0,
        duration: 0.15,
        ease: 'power2.in'
      });
    }
  };

  useEffect(() => {
    menuItemsRef.current.forEach((item) => {
      const text = item.textContent;
      item.innerHTML = text.split('').map(char => `<span class="char" style="display: inline-block;">${char}</span>`).join('');
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-none bg-opacity-0  text-white z-50">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold font-helvetica"></h1>
          <button onClick={toggleMenu} className="text-3xl hover:text-gray-300 transition-colors duration-300">
            <FaBars />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-3/4 sm:w-80 lg:w-96 h-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white shadow-lg z-50 flex flex-col justify-between"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Menu</h2>
            <button onClick={closeMenu} className="text-3xl hover:text-gray-300 transition-colors duration-300">
              <FaTimes />
            </button>
          </div>
          <ul className="font-helvetica">
            {['Home', 'Skills', 'Services', 'Contact' ].map((item, index) => (
              <li key={item} className="mb-8 lg:mb-12">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl lg:text-2xl transition-colors duration-300 inline-block hover:text-gray-300"
                  ref={el => menuItemsRef.current[index] = el}
                  onMouseEnter={() => handleMenuItemHover(index)}
                  onMouseLeave={() => handleMenuItemLeave(index)}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 border-t border-gray-700">
          <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
          <div className="flex justify-between text-2xl">
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
