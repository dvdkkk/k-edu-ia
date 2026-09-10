import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X, ChevronRight, Award } from 'lucide-react';
import { KLogoIcon } from './KLogoIcon';

interface NavbarProps {
  onOpenApplication: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplication, onOpenCalculator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '교육소개', href: '#hero' },
    { name: '핵심포인트', href: '#keypoints' },
    { name: '취업처', href: '#employment' },
    { name: '취업지원', href: '#careersupport' },
    { name: '커리큘럼', href: '#curriculum' },
    { name: '수강후기', href: '#interviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0b0d]/90 backdrop-blur-md border-b border-[#c5a47e]/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group py-1 transition-all">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#161822] border border-[#c5a47e]/35 p-1 flex items-center justify-center shadow-md group-hover:border-[#c5a47e] group-hover:scale-105 transition-all shrink-0">
            <KLogoIcon className="w-full h-full rounded-lg" />
          </div>
          <span className="font-black text-base sm:text-xl tracking-tight text-white group-hover:text-[#c5a47e] transition-colors leading-none whitespace-nowrap">
            한국정보교육원
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#12141a]/90 border border-[#c5a47e]/20 rounded-full px-5 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm xl:text-base font-semibold text-gray-200 hover:text-white hover:bg-[#c5a47e]/15 hover:text-[#c5a47e] px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenApplication}
            className="relative group overflow-hidden rounded-xl font-semibold text-xs transition-all shadow-lg shadow-yellow-500/30 active:scale-95 animate-pulse hover:animate-none"
          >
            <span className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-xl text-black font-extrabold transition-colors shadow-[0_0_15px_rgba(250,204,21,0.5)]">
              <span>교육문의</span>
              <ChevronRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Action Controls (Education Inquiry + '목록' Menu Toggle) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenApplication}
            className="px-3 py-1.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs flex items-center gap-1 shadow-md shadow-yellow-500/30 active:scale-95 transition-all whitespace-nowrap"
          >
            <span>교육문의</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-2.5 py-1.5 rounded-xl bg-[#161822] border border-[#c5a47e]/40 text-[#f7e7ce] hover:text-white hover:border-[#c5a47e] flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-black text-white">닫기</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-[#c5a47e]" />
                <span className="text-xs font-black text-white">목록</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0d]/98 border-b border-[#c5a47e]/20 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#c5a47e] hover:bg-[#c5a47e]/10 p-2.5 rounded-lg text-center bg-[#12141a] border border-[#c5a47e]/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-[#c5a47e]/20">

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c5a47e] to-[#a37f55] text-black font-bold text-sm shadow-lg shadow-[#c5a47e]/20 text-center"
            >
              교육문의 하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
