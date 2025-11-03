"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import logo from "@/../public/img/logo/interstate logo v4-01.png";

export default function MobileNavbar({ navbarData }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // ✅ handle scroll locking here
useEffect(() => {
  const html = document.documentElement;
  const body = document.body;

  if (isOpen) {
    // Lock scroll
    const scrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
  } else {
    // Restore scroll
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.overflow = "";
    html.style.overflow = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return () => {
    // Cleanup when component unmounts
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.overflow = "";
    html.style.overflow = "";
  };
}, [isOpen]);


  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white-1 shadow-sm">
      {/* Top Section */}
      <div className="container flex items-center justify-between py-4 xl:hidden">
        <Link href="/">
          <Image src={logo} alt="Logo" width={180} height={60} />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="group relative z-50 flex h-10 w-10 flex-col items-start justify-center gap-2 rounded-md p-2"
        >
          <span
            className={cn(
              "block h-1 w-8 rounded bg-[var(--primary-hex)] transition-all",
              isOpen && "translate-y-1.5 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-1 w-6 rounded bg-[var(--secondary-hex)] transition-all",
              isOpen && "-translate-y-1.5 w-8 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Menu */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-[260px] overflow-y-auto bg-white-1 shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col gap-4 p-5 pt-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={180} height={60} />
          </Link>

          {navbarData?.map(({ id, menuTitle, path, menuItems }) => (
            <div key={id}>
              {menuItems ? (
                <>
             <div className="flex flex-col">
  <div
    className={cn(
      "flex items-center justify-between rounded-md px-4 py-3 text-left font-medium transition-colors hover:bg-gray-100",
      activeDropdown === id && "text-[var(--primary-hex)] font-medium"
    )}
  >
    {/* Parent link now navigates like desktop */}
    <Link
      href={path || "/"}
      onClick={toggleMenu}
      className="flex-1"
    >
      {menuTitle}
    </Link>

    {/* Dropdown toggle icon */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleDropdown(id);
      }}
      className="p-1"
    >
      <IconChevronDown
        className={cn(
          "transition-transform",
          activeDropdown === id && "rotate-180"
        )}
      />
    </button>
  </div>

  {/* Dropdown items */}
  {activeDropdown === id && (
    <ul className="ml-4 mt-1 flex flex-col gap-1">
      {menuItems.map(({ id, title, menuItemPath }) => (
        <li key={id}>
          <Link
            href={menuItemPath}
            onClick={toggleMenu}
            className={cn(
              "block rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-100",
              pathName === menuItemPath &&
                "text-[var(--primary-hex)] font-medium"
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>


                  {activeDropdown === id && (
                    <ul className="ml-4 mt-1 flex flex-col gap-1">
                      {menuItems.map(({ id, title, menuItemPath }) => (
                        <li key={id}>
                          <Link
                            href={menuItemPath}
                            onClick={() => setIsOpen(false)} // closes menu
                            className={cn(
                              "block rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-100",
                              pathName === menuItemPath &&
                                "text-[var(--primary-hex)] font-medium"
                            )}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={path || "/"}
                  onClick={() => setIsOpen(false)} // closes menu
                  className={cn(
                    "block rounded-md px-4 py-3 font-medium transition-colors hover:bg-gray-100",
                    pathName === path && "text-[var(--primary-hex)]"
                  )}
                >
                  {menuTitle}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
