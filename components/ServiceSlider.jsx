import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description:
      "Visual identity, color systems and brand kits that feel bright and unmistakably you.",
  },
  {
    Icon: RxPencil2,
    title: "UI / UX Design",
    description:
      "Clean, modern interfaces designed in Figma with a focus on clarity and delight.",
  },
  {
    Icon: RxDesktop,
    title: "Web Development",
    description:
      "Full-stack apps built with React, Next.js, TypeScript and Tailwind — fast and robust.",
  },
  {
    Icon: RxReader,
    title: "Product Strategy",
    description:
      "From discovery to roadmap: shaping scrappy ideas into focused, shippable products.",
  },
  {
    Icon: RxRocket,
    title: "Launch & SEO",
    description:
      "Performance, accessibility and SEO polish so your product shines on launch day.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/70 border border-primary/5 shadow-md shadow-accent/5 h-max rounded-2xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white hover:shadow-accent/20 transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold text-primary">
                {item.title}
              </div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl text-primary/70">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
