import { Button } from "./Button";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.png";
import pdfFile from "../assets/ResumeFile.pdf";
import React from "react";
const links = [
  { name: "Home", to: "hero" },
  { name: "Project", to: "project" },
  { name: "Experience", to: "experience" },
  { name: "Blogs", to: "blogs" },
  // { name: "Contact", to: "/" },
];

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // const [theme, setTheme] = React.useState(null);

  const handleLinkClick = (to) => {
    scroll.scrollTo(document.getElementById(to).offsetTop - 50);
    setOpen(false);
  };

  // React.useEffect(() => {
  //   document.documentElement.classList.remove("dark", "light");

  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //   }
  // }, [theme]);

  // const handleThemSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  //   console.log("dark", theme);
  // };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Rahul_Sharma_React_Developer_2yrs.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-full shadow-md  top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-10 px-7 justify-between items-center">
        <div className="font-bold text-xl cursor-pointer flex items-center space-x-3  text-gray-800">
          <img
            src={logo}
            className="rounded-full"
            width={37}
            height={37}
            alt="profile"
          />
          <span>Rahul Sharma</span>
        </div>
        <div
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center transition-all duration-500 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          {links.map((ele, ind) => (
            <li
              key={ind}
              className="md:ml-8 text-m cursor-pointer md:my-0 my-7"
            >
              <ScrollLink
                to={ele.to}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-50}
                onClick={() => handleLinkClick(ele.to)}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {ele.name}
              </ScrollLink>
            </li>
          ))}
          {/* <Button onClick={handleThemSwitch}>D/L</Button> */}
          <Button
            onClick={downloadPdf}
            icon={<ion-icon name="download-outline"></ion-icon>}
          >
            Resume{" "}
          </Button>
        </ul>
      </div>
    </div>
  );
};
