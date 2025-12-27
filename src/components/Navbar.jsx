import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section && 
            scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed top-0 left-0 w-full z-100 bg-p3-blue-dark/80 backdrop-blur-md border-b border-p3-blue-bright/20"
    >
      <div className="max-w-400 mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Sisi Kiri: Logo dengan Animasi Delay */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white font-black italic tracking-tighter text-xl"
        >
          ZAKI<span className="text-p3-blue-bright">_</span>RAMADHAN
        </motion.div>

        {/* Sisi Kanan: Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex md:gap-10 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer group relative"
            >
              <span className={`font-black italic uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 ${
                activeSection === item.id ? 'text-p3-blue-bright scale-110' : 'text-white'
              }`}>
                {item.name}
              </span>
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-p3-blue-bright transition-all duration-300 shadow-[0_0_8px_#00D2FF] ${
                activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Hamburger Button (Hanya muncul di HP) */}
        <div className="md:hidden text-2xl text-p3-blue-bright cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-p3-blue-dark/25 border-b border-p3-blue-bright/20 overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-4xl font-black italic uppercase tracking-tighter p-4 transform -skew-x-12 ${
                  activeSection === item.id ? 'bg-p3-blue-bright text-black' : 'bg-white/5 text-white'
                }`}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;