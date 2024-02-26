import { useEffect, useRef } from "react";
import Logo from "../../assets/data/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/products",
    display: "Products",
  },
  {
    path: "/team",
    display: "Our Teams",
  },
  {
    path: "/gallery",
    display: "Our Gallery",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================== Logo =============== */}
          <div className="logo-img">
            <Link to="/home">
              <img className="w-[60px] max:w-[40%]" src={Logo} alt="" />
            </Link>
          </div>
          {/*=======menu======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*=======Nav right======== */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="hidden w-[35px] h-[35px]">
                  <img src={Logo} alt="" />
                </figure>
              </Link>
            </div>
            <Link to="/contact">
              <button
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                rounded-[50px]  hover:bg-secondaryColor flex items-center"
              >
                Contact Us!
              </button>
            </Link>
            <span className=" md:hidden xl:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
