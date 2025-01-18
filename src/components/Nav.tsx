'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { name: 'About me', href: '#about' },
  { name: 'My work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact me', href: '#contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const currentSection = pathname.split('#')[1] || 'about'

  return (
    <nav className="flex justify-center py-4">
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300
              ${item.href.includes(currentSection)
                ? 'bg-pink-200 text-gray-900 shadow-[0_0_15px_rgba(236,72,153,0.3)] scale-105'
                : 'hover:bg-pink-100 hover:shadow-[0_0_10px_rgba(236,72,153,0.2)]'
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

