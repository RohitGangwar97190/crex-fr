
import { useState } from 'react';
// import { MoonIcon } from '@heroicons/react/24/solid';
const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-code text-blue-500 text-2xl mr-2"></i>
              <span className="font-bold text-xl">SoftSell</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             <div className=" px-4 py-2 rounded  dark:text-white hover:bg-gray-300 transition">
       <button
  onClick={toggleDarkMode}
  className="flex items-center space-x-2 px-4 py-2 dark:bg-slate-900 rounded"
>
  <span>🌙</span>
  
</button>
       
      </div>
            <a href="#how-it-works" className="hover:text-blue-500">How It Works</a>
            <a href="#why-choose-us" className="hover:text-blue-500">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <button onClick={toggleDarkMode} className="ml-4">
              {isDark ? 
                <i className="fas fa-sun text-yellow-300"></i> : 
                <i className="fas fa-moon text-gray-600"></i>
              }
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="mr-4">
              {isDark ? 
                <i className="fas fa-sun text-yellow-300"></i> : 
                <i className="fas fa-moon text-gray-600"></i>
              }
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <div className="  bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center flex-col">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
         mode
        </button>
       
      </div>
            <a href="#how-it-works" className="block px-3 py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#why-choose-us" className="block px-3 py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
            <a href="#testimonials" className="block px-3 py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;