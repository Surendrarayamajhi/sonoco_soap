import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/image/png-transparent-soap.png";
import heroFoam from "../assets/image/foam.png";
// import heroBubble from '../assets/image/bubble.png';
import icon02 from "../assets/image/economical.png";
import icon03 from "../assets/image/health care.png";
import icon04 from "../assets/image/natural.png";
import featureImg from "../assets/image/png-transparent-soap.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import Team from "../components/teams/team";
// import Testimonial from '../components/testimonials/testimonial';
// import Card from '../components/cards/card';
import ProductList from "../components/products/productList";
const Home = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
    AOS.refresh();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* <Card /> */}
      {/*========Hero--Section========== */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*===========Hero Content=========== */}
            <div>
              <div
                data-aos="fade-left"
                data-aos-once="true"
                className="lg:w-[570px]"
              >
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] 
              md:text-[60px] md:leading-[70px]"
                >
                  We are offers products committed to eco-friendly practices.
                </h1>
                <p
                  data-aos="fade-up-right"
                  data-aos-delay="80"
                  data-aos-once="true"
                  className="text__para"
                >
                  Our soaps are lovingly made from the finest natural
                  ingredients, ensuring a gentle cleanse that nourishes and
                  hydrates. From moisturizing shea butter to refreshing
                  botanical extracts,each bar is a celebration of purity and
                  indulgence.
                </p>
                <button
                  data-aos="fade-up"
                  className="btn  hover:bg-secondaryColor"
                >
                  Read More
                </button>
              </div>
              {/*==========Hero--Counter============ */}
              <div
                className="mt-30px] lg:mt-[70px] flex flex-col
            md:flex-row lg:items-center gap-5 lg:gap-30px]"
              >
                <div
                  data-aos="fade-up-right"
                  data-aos-once="true"
                  data-aos-delay="100"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    3+
                  </h2>
                  <span className="w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div
                  data-aos="fade-up-right"
                  data-aos-once="true"
                  data-aos-delay="250"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    8+
                  </h2>
                  <span className="w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Products Available</p>
                </div>

                <div
                  data-aos="fade-up-right"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Customers Satisfaction</p>
                </div>
              </div>
            </div>
            {/*===========Hero Content End=========== */}

            <div
              data-aos="fade-right"
              data-aos-once="true"
              className="flex gap-[30px] justify-end"
            >
              <div data-aos="fade-up-right">
                <img className="w-full" src={heroImg} alt="" />
              </div>
              <div
                data-aos="fade-down-right"
                data-aos-once="true"
                className="mt-[30px]"
              >
                <img src={heroFoam} alt="" className="w-full mb-[30px]" />
                {/* <img src={heroBubble} alt="" className='w-full mb-[30px]' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========Hero--Section--End========== */}

      {/*========Hero--Section-part2========== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-once="true"
              className="heading text-center"
            >
              Providing the best SOAP Products!
            </h2>
            <p
              data-aos="zoom-in-down"
              data-aos-once="true"
              className="text__para text-center"
            >
              World-class care for everyone. Our product offers unmatched,
              expert health care.
            </p>
          </div>
          <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div
                data-aos="zoom-in-right"
                className="flex item-center justify-center"
              >
                <img className="w-[200px]" src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Economical
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Sonoco's soaps and detergents give efficient cleaning with
                  small amounts and are at very affordable prices for consumers.
                </p>
                <Link
                  to="/products"
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  className="w-[44px] h-[44px] rounded-full 
                border border-solid border-[#181A1E mt-[30px] mx-auto flex
                 items-center justify-center group hover:bg-secondaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div
                data-aos="zoom-in"
                className="flex item-center justify-center"
              >
                <img className="w-[200px]" src={icon04} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Natural
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Our products contribute to personal and public health by
                  effectively removing dirt, bacteria and viruses from hands and
                  clothes.
                </p>
                <Link
                  to="/products"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  className="w-[44px] h-[44px] rounded-full 
                border border-solid border-[#181A1E mt-[30px] mx-auto flex
                 items-center justify-center group hover:bg-secondaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div
                data-aos="zoom-in-left"
                className="flex item-center justify-center"
              >
                <img className="w-[200px]" src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Health Care
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Whether you have sensitive skin, crave moisture, or desire a
                  refreshing cleanse, our diverse range caters to all your
                  skincare needs.
                </p>
                <Link
                  to="/products"
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                  className="w-[44px] h-[44px] rounded-full 
                border border-solid border-[#181A1E mt-[30px] mx-auto flex
                 items-center justify-center group hover:bg-secondaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========Hero--Section--End========== */}

      {/*======About--section--start====== */}
      <About />

      {/*======About--section--end====== */}

      {/*======services--section--start====== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2
              data-aos="zoom-out-down"
              data-aos-once="true"
              className="heading text-center"
            >
              Our Products
            </h2>
            <p data-aos="slide-left" className="text__para text-center">
              At Sonoco Soap, we're committed to delivering high-quality cleaning
              solutions that prioritize your family's well-being and
              environmental sustainability.
            </p>
          </div>
          <ProductList data-aos="zoom-out-up" />
        </div>
      </section>
      {/*======services--section--end====== */}

      {/*======feature--section--start====== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*=============feature Content============ */}
            <div
              className="xl:w-[670px]"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <h2 className="heading">
                Get 100% Customer trusted products{" "}
                <strong className="text-[36px] text-red-500">Sonoco</strong>{" "}
                Soap.
              </h2>
              <ol className="pl-4">
                <li
                  data-aos="zoom-in-up"
                  data-aos-once="true"
                  data-aos-delay="100"
                  className="text_para"
                >
                  Our products have continuously satisfied customers for years
                  with their excellent cleaning performance.
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                  className="text_para"
                >
                  These detergents are proven for their quality, safety and
                  environmental frienliness.
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-once="true"
                  data-aos-delay="300"
                  className="text_para"
                >
                  Effectively removes dust and dirt from clothing and other
                  fabrics.
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-once="true"
                  data-aos-delay="300"
                  className="text_para"
                >
                  These products are strictly tested for various fabrics and
                  skin types.
                </li>
              </ol>
              <Link to="/">
                <button className="btn btn-primary  hover:bg-secondaryColor">
                  Learn More
                </button>
              </Link>
            </div>
            {/*===========feature Image=========== */}
            <div
              data-aos="fade-up"
              className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"
            >
              <img src={featureImg} className="w-3/4 " alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*======feature--section--end====== */}
      {/*======team--section--start====== */}
      <Team />
      {/*======team--section--end====== */}
    </>
  );
};
// AOS.init();

export default Home;
