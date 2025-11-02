import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { debounce } from '@/utilities/debounce';
import Navmenu from '@/layout/navmenu';

const Header = () => {
  const navbarStyles = {
    position: 'fixed',
    height: '150px',
    transition: 'top 0.5s'
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 100) || currentScrollPos < 20);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  function scroll() {
      window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  return (
    <nav className="flex flex-nowrap w-full items-center justify-between px-6 md:px-16 lg:px-60 lg:text-2xl z-20 glass dark:bg-black" 
    style={{ ...navbarStyles, top: visible ? '0' : '-150px' }}>
      <a href="/Resume" className="font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white">Lim Hao Wen</a>
      <Navmenu />
      <ul className="hidden lg:flex md:gap-12 md:h-6">
        <li>
          <a href="https://www.linkedin.com/in/lim-hao-wen/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn 
          className="hover:fill-gray hover:stroke-gray dark:fill-white" /></a>
        </li>
        <li>
          <a href="https://medium.com/@lim.haowen" target="_blank" rel="noopener noreferrer"><FaMedium 
          className="hover:fill-gray hover:stroke-gray dark:fill-white"/></a>
        </li>
        <li>
          <a href="https://github.com/LimHaoWen" target="_blank" rel="noopener noreferrer"><FaGithub 
          className="hover:fill-gray hover:stroke-gray dark:fill-white"/></a>
        </li>
        <li>
            <button type="button" onClick={scroll} className="text-base align-[20%] hover:text-gray dark:text-white">
            Contact me
            </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header