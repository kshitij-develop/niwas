import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from "../public/NiwasIcon.png";
const NavBar = () => {
   const [navDark, setNavDark] = React.useState(false);
    React.useEffect(() => {
      const lightsections = [
        "white-section-1",
        "white-section-2",
        "FAQSEC",
      ];
      const elements = lightsections
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
  
      if (elements.length === 0) return;
  
      const observer = new IntersectionObserver(
        (enteries) => {
          const anyvisible = enteries.some((entry) => entry.isIntersecting);
          if (anyvisible) {
            setNavDark(true);
          } else {
            setNavDark(false);
          }
        },
        { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
      );
  
      elements.forEach((el) => observer.observe(el!));
      return () => observer.disconnect();
    }, []);
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-transparent  backdrop-blur-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-start shrink-0 gap-2">
              <Image
                src={logo}
                width={100}
                alt="niwas.ai"
                className="object-contain "
              />
              {/* <Image
                src={icon}
                alt="niwas.ai"
                width={100}
                className="items-start object-contain h-10"
              /> */}
            </div>
            <div className="">
              <a
                href="/"
                className={`px-5 text-xl ${
                  navDark ? "text-black" : "text-white"
                }`}
              >
                Home
              </a>
              <Link
                href="/aboutus"
                className={`text-xl ${navDark ? "text-black" : "text-white"}`}
              >
                About Us
              </Link>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="px-4 py-2 ml-8 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-purple-800"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar