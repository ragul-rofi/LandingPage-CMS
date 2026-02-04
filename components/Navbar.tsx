
import React from 'react';

const Navbar: React.FC = () => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-bowl-food text-white"></i>
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900">Notin<span className="text-orange-500">Q</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">Home</a>
            <a href="#features" onClick={(e) => smoothScroll(e, '#features')} className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#story" onClick={(e) => smoothScroll(e, '#story')} className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">Our Story</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://cms-sooty-eight.vercel.app/login" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors">Login</a>
            <a href="https://cms-sooty-eight.vercel.app/login" target="_blank" rel="noopener noreferrer" className="sm:hidden bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Login
            </a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="hidden sm:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
