import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Amelia Tan",
    position: "Founder, BrightWave Labs",
    message:
      "Denny shipped our MVP in record time with taste and care. Working with him feels like a breath of fresh air — thoughtful, fast, and kind.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jordan Lee",
    position: "Product Lead, SunnySide Studio",
    message:
      "He turned a messy brief into a crisp, beautiful product. Stakeholders were impressed and users actually love using it every day.",
  },
  {
    image: "/t-avt-3.png",
    name: "Priya Raman",
    position: "Co-founder, MintLane",
    message:
      "Rare combo of design sensibility and strong engineering. Denny is the kind of builder every early-stage team wants on board.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full ring-2 ring-accent/40"
                  />
                </div>

                {/* name */}
                <div className="text-lg font-semibold text-primary">
                  {person.name}
                </div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest text-primary/60">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-primary/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-accent/30 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-primary/80">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
