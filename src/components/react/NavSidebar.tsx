import React, { useState, type FC } from 'react'
import Portal from './Portal'
import useMediaQuery from '../../react/hooks/useMediaQuery'

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black" />
    </svg>
  )
}

const NavSidebar: FC<NavSidebarProps> = ({ navLinks }) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const handleToggleSidebar = function () {
    setOpen(!open)
  }

  return (
    isMobile && (
      <>
        <button onClick={handleToggleSidebar}>
          <MenuIcon />
        </button>
        <Portal root={document.body}>
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${
              !open ? 'pointer-events-none' : ''
            }`}
          >
            <div
              className={`w-full h-full bg-gray-600 bg-opacity-30 absolute transition-all ${
                !open ? '!bg-transparent' : ''
              }`}
              onClick={handleToggleSidebar}
            />
            <div
              className={`absolute top-0 bottom-0 right-0 max-w-80 w-full bg-white transition-all duration-300 flex flex-col h-full ${
                !open ? 'translate-x-full' : ''
              }`}
            >
              <section className="p-4">
                <p className="text-xl font-bold mb-4">Welcome</p>
                <ul className="flex flex-col gap-4 overflow-auto">
                  {navLinks.map((link) => (
                    <li>
                      <a
                        href={link.href}
                        className="text-sm"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Portal>
      </>
    )
  )
}

interface NavSidebarProps {
  navLinks: NavLink[]
}

interface NavLink {
  label: string
  href: string
}

export default NavSidebar
