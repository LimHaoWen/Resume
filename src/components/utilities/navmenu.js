import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Dropmenu from '../images/Menu.png'
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
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:stroke-lightgray">
          <img className="h-16"src={Dropmenu} alt="Navmenu"></img>
        </Menu.Button>
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
        <Menu.Items className="absolute right-7 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.linkedin.com/in/lim-hao-wen/"
                  className={classNames(
                    active ? 'bg-lightgray text-charcoal' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaLinkedinIn className="inline-block h-5 mr-2 mb-[0.15rem]"/> LinkedIn
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.instagram.com/lin.haowen/"
                  className={classNames(
                    active ? 'bg-lightgray text-charcoal' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaInstagram className="inline-block h-5 mr-2 mb-[0.15rem]"/> Instagram
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://github.com/LimHaoWen"
                  className={classNames(
                    active ? 'bg-lightgray text-charcoal' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <FaGithub className="inline-block h-5 mr-2 mb-[0.15rem]"/> Github
                </a>
              )}
            </Menu.Item>
            <button type="button" onClick={scroll}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames("w-56 text-left",
                      active ? 'bg-lightgray text-charcoal' : 'text-black',
                    'block px-4 py-2 text-sm'
                    )}
                  >
                    <HiOutlineMail className="inline-block h-4 mr-2 mb-[0.15rem]"/> Contact Me
                  </button>
                )}
              </Menu.Item>
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
