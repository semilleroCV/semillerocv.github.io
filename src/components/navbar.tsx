"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  HomeIcon,
  RocketLaunchIcon,
  CameraIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon,
  TrophyIcon
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}


function NavItem({ children, href }: NavItemProps) {
  const isExternal =
    href && (href.startsWith("http://") || href.startsWith("https://"));
  if (isExternal) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-all duration-300"
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href || "#"}
        className="flex items-center gap-2 font-medium text-gray-200 hover:text-white transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

const NAV_MENU = (t: any) => [
  { name: t("home"), icon: HomeIcon, href: "/" },
  { name: t("sessions"), icon: RocketLaunchIcon, href: "/sesiones" },
  { name: t("gallery"), icon: CameraIcon, href: "/galeria" },
  { name: t("about_us"), icon: UserIcon, href: "/nosotros" },
  { name: t("projects"), icon: TrophyIcon, href: "/sesiones/sesion12" },
  {
    name: "2024",
    icon: ArrowRightOnRectangleIcon,
    href: "https://semillerocv.github.io/2024",
  },
];

export function Navbar() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenu = NAV_MENU(t);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl 
        transition-all duration-500 ease-in-out 
        rounded-xl px-6 py-3 backdrop-blur-md border border-white/20 
        ${isScrolling ? "bg-white/10 shadow-xl" : "bg-white/5 shadow-none"}
      `}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="Tool Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            color="white"
            className="text-xl font-bold"
          >
            Hands-on Computer Vision
          </Typography>
        </div>

        {/* Desktop Menu Social Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navMenu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-white" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>

          {/* Social Media Dropdown */}
          <Menu>
            <MenuHandler>
              <IconButton
                variant="text"
                color="white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-solid fa-share-nodes text-xl" />
              </IconButton>
            </MenuHandler>
            <MenuList
              className="bg-teal-900 border-teal-800"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <MenuItem
                className="p-0 hover:bg-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <a
                  href="https://discord.gg/MkCpdsHZzJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
     flex items-center gap-2 w-full p-2 rounded 
     hover:bg-teal-400 hover:text-black 
     transition-all duration-300 
     transform hover:scale-105
   "
                >
                  <i className="fa-brands fa-discord text-xl text-white" />
                  <span className="text-white">{t("discord")}</span>
                </a>
              </MenuItem>
              <MenuItem
                className="p-0 hover:bg-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <a
                  href="https://www.youtube.com/@Hands-OnCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
     flex items-center gap-2 w-full p-2 rounded 
     text-white 
     hover:bg-teal-400 hover:text-black 
     transition-all duration-300 
     transform hover:scale-105
   "
                >
                  <i className="fa-brands fa-youtube text-xl text-white" />
                  <span className="text-white">{t("youtube")}</span>
                </a>
              </MenuItem>
              <MenuItem
                className="p-0 hover:bg-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <a
                  href="https://www.instagram.com/handsoncv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
     flex items-center gap-2 w-full p-2 rounded 
     text-white 
     hover:bg-teal-400 hover:text-black 
     transition-all duration-300 
     transform hover:scale-105
   "
                >
                  <i className="fa-brands fa-instagram text-xl text-white" />
                  <span className="text-white">{t("instagram")}</span>
                </a>
              </MenuItem>
              <MenuItem
                className="p-0 hover:bg-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <a
                  href="https://github.com/semilleroCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
     flex items-center gap-2 w-full p-2 rounded 
     text-white 
     hover:bg-teal-400 hover:text-black 
     transition-all duration-300 
     transform hover:scale-105
   "
                >
                  <i className="fa-brands fa-github text-xl text-white" />
                  <span className="text-white">{t("github")}</span>
                </a>
              </MenuItem>
              <MenuItem
                className="p-0 hover:bg-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <a
                  href="https://semillerocv.alwaysdata.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
     flex items-center gap-2 w-full p-2 rounded 
     text-white 
     hover:bg-teal-400 hover:text-black 
     transition-all duration-300 
     transform hover:scale-105
   "
                >
                  <i className="fa fa-globe text-xl text-white" />
                  <span className="text-white">{t("wiki")}</span>
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </IconButton>
      </div>

      {/* Mobile Dropdown */}
      <Collapse open={open}>
        <div className="mt-4 bg-teal-900/95 backdrop-blur-xl p-6 rounded-xl border border-teal-800 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navMenu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-teal-300" />
                <span className="text-gray-100 font-medium">{name}</span>
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-teal-800 flex justify-center gap-4">
            <a
              href="https://discord.gg/MkCpdsHZzJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("discord")}
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-discord text-xl" />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/@Hands-OnCV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("youtube")}
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-youtube text-xl" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/handsoncv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("instagram")}
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-instagram text-xl" />
              </IconButton>
            </a>
            <a
              href="https://github.com/semilleroCV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("github")}
            >
              <IconButton
                size="md"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-github text-xl" />
              </IconButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
