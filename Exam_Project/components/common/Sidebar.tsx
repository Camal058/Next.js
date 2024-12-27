"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    z-index: 50;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    height: 100vh;
    width: 256px;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 40;
  }
`;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
      { name: 'Dashboard', href: '/', icon: 'icons-sidebar/dashboard.png', activeIcon: 'icons-sidebar/active/dashboardActive.png' },
      { name: 'Transactions', href: '/transactions', icon: 'icons-sidebar/transactions.png', activeIcon: 'icons-sidebar/active/transactionsActive.png' },
      { name: 'Accounts', href: '/accounts', icon: 'icons-sidebar/accounts.png', activeIcon: 'icons-sidebar/active/accountsActive.png' },
      { name: 'Investments', href: '/investments', icon: 'icons-sidebar/investments.png', activeIcon: 'icons-sidebar/active/investmentsActive.png' },
      { name: 'Credit Cards', href: '/credit-cards', icon: 'icons-sidebar/credit-cards.png', activeIcon: 'icons-sidebar/active/credit-cardsActive.png' },
      { name: 'Loans', href: '/loans', icon: 'icons-sidebar/loans.png', activeIcon: 'icons-sidebar/active/loansActive.png' },
      { name: 'Services', href: '/services', icon: 'icons-sidebar/services.png', activeIcon: 'icons-sidebar/active/servicesActive.png' },
      { name: 'My Privileges', href: '/my-privileges', icon: 'icons-sidebar/my-privileges.png', activeIcon: 'icons-sidebar/active/my-privilegesActive.png' },
      { name: 'Setting', href: '/setting', icon: 'icons-sidebar/setting.png', activeIcon: 'icons-sidebar/active/settingActive.png' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
      <>
          {!isOpen && (
              <button
                  className="md:hidden p-2 fixed top-5 left-4 z-50"
                  onClick={() => setIsOpen(true)}
              >
                  <img src='header/burger.png' />
              </button>
          )}

          {isOpen && (
              <div
                  className="fixed inset-0 z-30 bg-black bg-opacity-50"
                  onClick={closeMenu}
              />
          )}

          <div
              className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                  } md:translate-x-0 transition-transform fixed md:relative w-60 bg-gray-100 h-screen flex flex-col py-6 px-4 z-40`}
          >
              <div className="text-[#343C6A] font-extrabold text-2xl mb-6 flex justify-around">
                  <img src='logo.png' alt="Bank Logo" />BankDash.
              </div>
              <nav className="flex flex-col gap-2">
                  {navItems.map(({ name, href, icon, activeIcon }) => (
                      <Link
                          key={href}
                          href={href}
                          onClick={closeMenu}
                          className={`flex items-center font-normal gap-6 rounded-md px-4 py-2 ${pathname === href
                              ? 'text-[#1814F3]'
                              : 'text-[#B1B1B1] hover:text-[#1814F3]'
                              } group`}
                      >
                          <img
                              src={pathname === href ? activeIcon : icon}
                              alt={name}
                              className="w-4 h-4 group-hover:hidden"
                          />
                          <img
                              src={activeIcon}
                              alt={`${name} Active`}
                              className="w-4 h-4 hidden group-hover:block"
                          />
                          <span>{name}</span>
                      </Link>
                  ))}
              </nav>
          </div>
      </>
  );
}