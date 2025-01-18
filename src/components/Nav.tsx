'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'About me', href: '#hero' },
  { name: 'My work', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skil' },
  { name: 'Contact me', href: '#contact' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentSection = pathname.split('#')[1] || 'about';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center w-full gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300
              text-black 
              ${item.href.includes(currentSection)
                ? 'border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                : 'hover:bg-pink-100 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]'
              }
              hover:text-black
              relative group`}
          >
            {item.name}
            {/* Glitter effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between items-center px-4">
        <button
          onClick={toggleMenu}
          className="text-black text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.href} onClick={() => setIsMenuOpen(false)}>
                <Link
                  href={item.href}
                  className={`px-6 py-2 rounded-full text-sm transition-all duration-300
                    text-black 
                    ${item.href.includes(currentSection)
                      ? 'border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                      : 'hover:bg-pink-100 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                    }
                    hover:text-black
                    relative group`}
                >
                  {item.name}
                  {/* Glitter effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
