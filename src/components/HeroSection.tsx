import React from 'react';
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Img1 from "../assets/efgoats.jpg"
import Img2 from "../assets/efmainc.jpg"
import Img3 from "../assets/fishpond.jpg"
import Img4 from "../assets/efpigs.jpg"
import Img5 from "../assets/goats.jpg"
import Img6 from "../assets/pepper.jpg"
import Img7 from "../assets/noilers.jpg"
import Img8 from "../assets/maize.jpg"
import Img9 from "../assets/plains.jpg"

const HeroSection: React.FC = () => {
  return (
    <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
       centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img2})`,
                filter: "brightness(0.5)"
              }}>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  Fresh From Our <span className="text-yellow-300">Farm</span> To Your Table
                </h1>
                <p className="text-xl mb-8 text-white opacity-90">
                  Experience nature's true flavour with our organic produce.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="btn-primary bg-farm-green text-white px-8 py-3 text-lg">
                    Explore Our Products
                  </Button>
                  <Button variant="outline" className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg hover:bg-yellow-300 hover:text-gray-800 transition-all">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img1})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img3})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

         <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img4})`,
                filter: "brightness(0.5)"
              }}>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  Organically Raised <span className="text-yellow-300">Livestock</span> For Your Consumption
                </h1>
                <p className="text-xl mb-8 text-white opacity-90">
                  Experience nature's true flavour with our organic produce.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img6})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img8})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img9})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img5})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="home" className="relative h-[90vh] flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{
                backgroundImage: `url(${Img7})`,
                filter: "brightness(0.5)"
              }}>
            </div>
          </section>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default HeroSection;
