import React from "react";
import Logo from "../../assets/data/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center md:flex xl:flex md:justify-evenly bg-blue-50 text-gray-600 py-16 mx-auto">
      <div className=" md:flex gap-6">
        <div className="w-[70px] mx-auto mb-4">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="px-3">
          <h5 className="text-center md:w-[500px] mb-5 md:text-justify">
            At Sonoco, we're committed to delivering high-quality cleaning
            solutions that prioritize your family's well-being and environmental
            sustainability.
          </h5>
          <ul className="text-blue-950 font-medium mt-4">
            <li>Khajura VDC 03, Bagheswori tole <br />Banke, Nepal</li>
            <li>sonocosoap@gmail.com</li>
            <li>+9779851188548</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-semibold py-4 md:py-2">Quick Link</div>
        <div>
          <ul>
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <Link to="/about">
                <a href="/#about">About</a>
              </Link>
            </li>
            <Link to="/contact">
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <a href="/contact">Contact</a>
            </li>
            </Link>
            <Link to="/team">
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <a href="/team">Our Team</a>
            </li>
            </Link>
            <Link to="/products">
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <a href="/products">Products</a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* <div>
        <div className="font-semibold py-4 md:py-2">Helps</div>
        <div>
          <ul className="mx-auto">
            <li className="md:w-[100px] text-wrap hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold hover:px-[2px] text-center">
              <a href="#">Terms & condition</a>
            </li>
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <a href="#">Reports</a>
            </li>
            <li className=" hover:bg-blue-900 hover:rounded hover:text-white hover:font-semiBold">
              <a href="#">Policies</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div>
        <div className="font-semibold py-4 md:py-2">Social Links</div>
        <div>
          <ul>
            <li className="hover:bg-blue-700 hover:rounded hover:text-white hover:font-semibold">
              <a href="https://www.facebook.com/share/P46wZaCQwg2ksK27/?mibextid=sCpJLy" target="_blank">Facebook</a>
            </li>
            <li className="hover:bg-pink-700 hover:rounded hover:text-white hover:font-semibold">
              <a href="https://www.instagram.com/sonocosoap?igsh=MThubDRiYTJiamliOA==" target="_blank">Instagram</a>
            </li>
            {/* <li className="hover:bg-slate-700 hover:rounded hover:text-white hover:font-semibold">
              <a href="#">Twitter</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
