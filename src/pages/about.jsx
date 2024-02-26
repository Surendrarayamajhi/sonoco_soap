import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { NavLink, Link } from "react-router-dom";
import aboutBanner from "../assets/image/aboutBanner.jpg";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 27.6293552,
    lng: 83.4685171,
  },
  zoom: 11,
};

const about = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      id="about"
      className="grid min-h-full place-items-center bg-white px-6 py-16 sm:py-32 lg:px-8"
    >
      <div className="text-center">
        <h1
          data-aos="zoom-out-down"
          data-aos-delay="100"
          data-aos-duration="650"
          className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          About Us
        </h1>
        <p
          data-aos="fade-down"
          className="mt-6 text-base leading-7 text-gray-600"
        >
          At Sonoco Soap, we're committed to delivering high-quality cleaning
          solutions that prioritize your family's well-being and environmental
          sustainability. Our journey began [insert founding year or relevant
          history], and since then, we've been dedicated to revolutionizing the
          way households approach cleanliness.
        </p>
        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/home">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </Link>
        </div> */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div>
            <img
              data-aos="flip-right"
              data-aos-once="true"
              src={aboutBanner}
              alt=""
              className="rounded"
            />
          </div>
        </div>
        <div className="py-8 bg-slate-50 mt-3 rounded">
          <h2
            data-aos="fade-down"
            className="mt-4 text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            Our Mission
          </h2>
          <div className="mt-4">
            <p
              data-aos="zoom-out-up"
              data-aos-delay="100"
              className="text-justify py-2 px-3 mx-2"
            >
              "At Sonoco, our mission is to redefine clean living by delivering
              exceptional, eco-conscious soap and detergent solutions. We are
              committed to formulating products that prioritize effectiveness,
              safety, and environmental responsibility. Our dedication extends
              beyond providing quality cleaning solutions; we aim to inspire
              sustainable habits, promote a healthier environment, and elevate
              the well-being of our customers and communities. Through
              innovation, integrity, and a steadfast commitment to excellence,
              we strive to become a trusted partner in every household's journey
              toward a cleaner, greener future."
            </p>
          </div>
        </div>
        <div className="py-8 bg-blue-50 mt-3 rounded">
          <h2 className="mt-4 text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Vision
          </h2>
          <div>
            <p
              data-aos="zoom-out-up"
              data-aos-delay="150"
              className="text-justify py-2 px-3 mx-2"
            >
              "Sonoco envisions a world where cleanliness harmonizes with
              sustainability. Our vision is to lead the industry in providing
              innovative, eco-friendly cleaning solutions that elevate homes
              while preserving the planet. We aspire to be pioneers in setting
              new standards of environmental responsibility, inspiring global
              change towards a more sustainable and healthier future. Through
              relentless dedication to research, development, and ethical
              practices, we aim to empower individuals and communities to
              embrace cleaner living without compromising on efficacy or the
              well-being of future generations. Sonoco's vision is to be the
              beacon of a cleaner, brighter, and more sustainable world for
              all."
            </p>
          </div>
        </div>
        <div className="py-8 bg-red-50 mt-3 rounded">
          <h2 className="mt-4 text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Goals
          </h2>
          <div>
            <p
              data-aos="zoom-out-up"
              data-aos-delay="200"
              className="text-justify py-2 px-3 mx-2"
            >
              Our primary goal is to offer powerful cleaning solutions that clean
              well,are easy to use and keep dishes and clothes looks best
              prioritizing customer’s satisfaction , innovation and
              being eco-friendly.
            </p>
          </div>
        </div>
        <div className="py-4">
          <h2 className="mt-4 text-lg font-semibold tracking-tight text-gray-600 sm:text-5xl">
            Our Location
          </h2>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </main>
  );
};

export default about;
