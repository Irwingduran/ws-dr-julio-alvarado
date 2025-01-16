import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const data = [
    {
      img: "/src/assets/img/img1.jpg",
      name: "Endoscopia Gastrointestinal.​",
      specialties: "Descripción",
    },
    {
      img: "/src/assets/img/img1.jpg",
      name: "Laparoscopia Digestiva",
      specialties: "Descripción",
    },
    {
      img: "/src/assets/img/img1.jpg",
      name: "Cirugía Digestiva",
      specialties: "Descripción",
    },
    {
      img: "/src/assets/img/img1.jpg",
      name: "Colonoscopia",
      specialties: "Descripción",
    },
    {
      img: "/src/assets/img/img1.jpg",
      name: "Colangiografía Endoscópica",
      specialties: "Descripción",
    },
    {
      img: "/src/assets/img/img1.jpg",
      name: "Cirugía Laparoscópica y Digestiva",
      specialties: "Descripción",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="h-fit py-20 flex flex-col justify-center lg:px-32 px-5 bg-white">
      <div className="flex flex-col items-center lg:flex-row object-center justify-between mb-10 lg:mb-0">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
           Artículos
          </h1>
        <div className="text-center mb-12">
          <p className=" mt-2 text-center lg:text-start">
            Articulos que tal vez sean de tu interés...
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-white text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-white text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className=" h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
