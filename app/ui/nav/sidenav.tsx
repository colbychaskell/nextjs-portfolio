'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { fetchSocialLinks } from '@/app/lib/data';
import SocialLink from './social-link';

const links = [
  { name: 'home', href: '/' },
  { name: 'blog', href: '/blog' },
  { name: 'projects', href: '/projects' },
];

function SocialLinks() {
  const socialLinks = fetchSocialLinks();

  return (
  <div className="flex justify-center gap-4"  >
    {socialLinks.map((socialLink) => (
      <SocialLink key={socialLink.href} socialLink={socialLink} />
    ))}
  </div>
  );
}

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-md md:hidden z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-200 ease-in-out md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col p-4">
          <div className="flex-grow">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 my-1 rounded-md transition-colors ${
                    isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="mailto:colby@colbyhaskell.com"
              className="block px-4 py-2 my-1 mt-4 rounded-md text-center text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              contact me
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 pt-4">
            <SocialLinks />
          </div>
        </nav>
      </aside>
    </>
  );
} 