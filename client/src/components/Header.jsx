import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants/navigation";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [show, setShow] = useState(true);
  const [animateOpacity, setAnimateOpacity] = useState(true);

  const animateButtonOut = () => {
    if (openNavigation) {
      setShow(false); // Hide the button when navigation is open
    } else {
      // If navigation is closed, start opacity animation after a delay
      const timeoutId = setTimeout(() => {
        setAnimateOpacity(false);
      }, 2000); // Adjust this timeout as needed

      // Clear the timeout and stop the animation when the component unmounts or when openNavigation changes
      return () => {
        clearTimeout(timeoutId);
        setAnimateOpacity(true);

        // Wait for the animation to complete before setting show to false
        setTimeout(() => {
          setShow(false);
        }, 3000); // Adjust this timeout to be 1 second more than the duration of the animation
      };
    }
  };

  useEffect(animateButtonOut, [openNavigation]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img
            src="/src/assets/crossedFlagsAmericaIsrael.png"
            width={130}
            height={40}
            alt="Voice Of Israel"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {show && (
          <Button
            className={`hidden lg:flex transition-opacity ease-in-out duration-700 ${
              animateOpacity ? "opacity-100" : "opacity-0"
            }`}
            href="login"
          >
            Sign in
          </Button>
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
