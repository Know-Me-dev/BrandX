import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import React, { useState, useRef, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.classList.contains('hamburger-icon')
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`padding-x py-8 z-30 absolute w-full max-lg:fixed max-lg:shadow-sm max-lg:bg-white transition-transform transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>
        <div className="block lg:hidden ">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className={`z-50 relative cursor-pointer duration-300 transform hamburger-icon ${isMenuOpen ? 'rotate-180' : ' rotate-0'}`}
            onClick={toggleMenu}
          />

          <ul ref={menuRef} className={`flex flex-col items-center gap-y-16 pb-16 transition-transform transform duration-300 bg-white shadow-xl rounded-b-xl z-60 fixed min-h-max top-0 right-0 w-full max-sm:w-full ${isMenuOpen ? 'translate-y-0' : ' -translate-y-[110%]'}`}>
            <div className=" shadow-sm  w-full py-9 px-4">
              <img
                src={headerLogo}
                alt='Logo'
                width={130}
                height={29}
              />
            </div>

            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat relative leading-normal text-lg text-black font-medium hover:opacity-60 duration-150 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='nav-items-hover'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
