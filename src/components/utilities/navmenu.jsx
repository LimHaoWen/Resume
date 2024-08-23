import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {FaLinkedinIn, FaInstagram, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function scroll() {
    window.scroll({
    top: document.body.offsetHeight,
    behavior: 'smooth',
  });
}

export default function Navmenu() {
  return (
    <Menu as="div" className="relative inline-block text-left opacity-90 lg:hidden">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white
        px-3 py-2 text-sm font-semibold text-gray-900 hover:stroke-lightgray dark:bg-black dark:stroke-white dark:fill-white">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="40px" height="40px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-7 z-10 mt-2 w-56 origin-top-right rounded-md bg-white 
        shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-charcoal">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="https://www.linkedin.com/in/lim-hao-wen/"
                  className={classNames(
                   focus ? 'bg-lightgray text-charcoal' : 'text-black dark:text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaLinkedinIn className="inline-block h-5 mr-2 mb-[0.15rem]"/> LinkedIn
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="https://www.instagram.com/lin.haowen/"
                  className={classNames(
                   focus ? 'bg-lightgray text-charcoal' : 'text-black dark:text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaInstagram className="inline-block h-5 mr-2 mb-[0.15rem]"/> Instagram
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="https://github.com/LimHaoWen"
                  className={classNames(
                   focus ? 'bg-lightgray text-charcoal' : 'text-black dark:text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaGithub className="inline-block h-5 mr-2 mb-[0.15rem]"/> Github
                </a>
              )}
            </MenuItem>
            <button type="button" onClick={scroll}>
              <MenuItem>
                {({ focus }) => (
                  <button
                    type="submit"
                    className={classNames("w-56 text-left",
                     focus ? 'bg-lightgray text-charcoal' : 'text-black dark:text-white',
                    'block px-4 py-2 text-sm'
                    )}
                  >
                    <HiOutlineMail className="inline-block h-4 mr-2 mb-[0.15rem]"/> Contact Me
                  </button>
                )}
              </MenuItem>
            </button>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
