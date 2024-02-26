import React from "react";
import aboutImg from "../../assets/image/about-img.png";
import aboutBanner from "../../assets/image/aboutBanner.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col-reverse lg:flex-row">
          {/*====== about image========= */}
          <div
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-delay="100"
            className="relative w-4/5 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order- mx-4 my-auto"
          >
            <img className="w-full max-h-[300px] rounded items-center" src={aboutBanner} alt="" /> <br />
            {/* <img className="w-4/5 items-center" src={aboutImg} alt="" /> */}
            {/* <div className=' z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] lg:right-[-22%]'>
                    <img src={aboutCardImg} alt="" />
                </div> */}
          </div>

          {/*=========about--content============ */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center">
            <h2
              data-aos="zoom-out-down"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="heading text-center"
            >
              Our Story
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-once="true"
              className="text__para text-justify mt-4"
            >
              In 2076-01-30 B.S, Founder/CEO Ram Hari Bhatta launched a new
              chapter in detergent history from Khajura VDC 03, Bagheswori tole.
              Together with a committed group of individuals including HR Head
              Sushma Pokharel, Production InCharge Nawaraj Dhakal, Counsellor
              Giri Raj Sharma, and Marketing Manager Pitamber Lamichhane,they
              introduced a varieties of detergent powders that included Ghanti,
              Hariyo Paat, Saanvi, and Many Live.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
              className="text__para mt-[30px] text-justify"
            >
              Over the years, their products became popular for it's cleanliness
              and freshness. Through strategic marketing They created a market
              position and gained trust and loyalty by using customer-focused
              techniques and clever marketing, their dedication to
              sustainability and innovation helped them to establish their
              status as innovators in the detergent sector.
            </p>

            <Link to="/about">
              <button
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                data-aos-once="true"
                className="btn  hover:bg-secondaryColor"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
