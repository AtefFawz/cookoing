"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Switched from "../shared/components/Switched";

interface dataType {
  name: string;
  path: string;
}

export const data: dataType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/aboutUs" },
  { name: "Recipes", path: "/recipes" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contactUs" },
];

export default function Navbar() {
  const pathname = usePathname(); // ✅ Get current url
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  function toggleMobileNav() {
    mobileNavRef.current?.classList.toggle("showNav");
  }
  // ✅ Desktop links
  const desktopLinks = data.map((item, ind) => (
    <ul key={ind}>
      <li
        className={`font-bold text-xl md:text-[16px] lg:text-xl ${
          pathname === item.path
            ? "text-blue-500 md:border-b-2 border-blue-600"
            : "text-gray-600"
        }`}
      >
        <Link href={item.path}>{item.name}</Link>
      </li>
    </ul>
  ));

  // ✅ Mobile links
  const mobileLinks = data.map((item, ind) => (
    <Link
      key={ind}
      href={item.path}
      className={`font-bold text-xl px-5 ${
        pathname === item.path
          ? "text-blue-500 rounded-xl py-2 px-4 bg-gray-300  w-full"
          : "text-gray-600"
      }`}
      onClick={toggleMobileNav}
    >
      {item.name}
    </Link>
  ));

  return (
    <header
      className={`overflow-hidden md:px-3 lg:px-4 md:py-7 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#ffffff] dark:bg-gray-900 shadow-lg `}
    >
      <div className="container mx-auto">
        {/* ✅ Desktop */}
        <div className="hidden md:block">
          <header className="flex flex-row justify-between items-center gap-x-7">
            <Switched />

            <nav className="flex md:gap-x-3 gap-7 lg:gap-x-10 xl:gap-16 items-center">
              {desktopLinks}

              <div className="flex gap-x-1 w-full">
                <Button
                  style={{
                    fontWeight: "bold",
                    color: "#213D34",
                    fontSize: "12px",
                  }}
                >
                  <Link
                    href="/contactUs"
                    className="dark:text-primary text-gray-600"
                  >
                    Log In
                  </Link>
                </Button>
                <Button
                  className="w-full text-nowrap"
                  variant="contained"
                  style={{
                    borderRadius: "50px",
                    fontWeight: "bold",
                    // backgroundColor: "#213D34",
                    fontSize: "12px",
                    padding: "7px",
                  }}
                >
                  <Link href="/" className="">
                    Start For Free
                  </Link>
                </Button>
              </div>
            </nav>
          </header>
        </div>

        {/* ✅ Mobile */}
        <header className=" pb-5 block md:hidden  ">
          <nav className="px-5 pt-5 flex justify-between items-center ">
            <DensityMediumIcon
              sx={{ cursor: "pointer" }}
              onClick={toggleMobileNav}
            />
          </nav>

          <nav
            ref={mobileNavRef}
            id="navHide"
            className=" flex-col gap-10 items-center px-5 relative top-20  z-100 "
          >
            {/* <div
              id="close"
              className="absolute right-5 top-[-70px]  flex justify-center items-center"
            >
              <CloseIcon onClick={toggleMobileNav} sx={{ cursor: "pointer" }} />
            </div> */}

            <div className="flex flex-col gap-y-10 text-start  absolute ">
              {mobileLinks}
              <hr className="w-[90vw]" />

              <div className="flex flex-col justify-center items-center md:gap-1 gap-3">
                <Switched />

                <Button
                  className="w-full md:w-fit"
                  style={{
                    fontWeight: "bold",
                    color: "#9CA3AF",
                    fontStyle: "italic",
                    borderRadius: "9999px",
                    backgroundColor: "#1F2937",
                  }}
                >
                  <Link href="/contactUs">Log In</Link>
                </Button>
                <Button
                  className=" w-full md:w-fit"
                  variant="contained"
                  style={{
                    borderRadius: "50px",
                    fontWeight: "bold",
                    backgroundColor: "#E7F9FD",
                    fontStyle: "italic",
                    color: "#111827",
                  }}
                >
                  <Link href="/">Start For Free</Link>
                </Button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </header>
  );
}
