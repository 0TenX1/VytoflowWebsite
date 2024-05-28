import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ButtonBg } from '../assets';

const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const items = [
    { id: 1, content: 'Event 1' },
    { id: 2, content: 'Event 2' },
    { id: 3, content: 'Event 3' },
    { id: 4, content: 'Event 4' },
    { id: 5, content: 'Event 5' },
  ];

  return (
    <div className="relative p-3 h-screen bg-blue-50">
      <div className="text-3xl text-n-7 lg:text-3xl xl:text-4xl 2xl:text-5xl flex justify-end lg:mt-28">
        <h2>Through The Lens: Our Events</h2>
      </div>
      <div className="absolute bottom-48 left-0 w-full flex justify-start p-3">
        <div className="w-3/4 md:w-2/3 lg:w-[44rem] h-96 md:h-128 lg:h-144">
          <Slider {...settings}>
            {items.map(item => (
              <div key={item.id} className="p-4 h-[30rem]">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4">{item.content}</h3>
                  <p className="text-gray-600">Details about {item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     <button
        className="bg-gradient-to-br absolute z-10 ml-10 font-semibold text-white px-7 py-3 backdrop-blur-3xl rounded-2xl shadow-xl"
        style={{
          marginTop: '-45px',
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-red-300 rounded-2xl" />
        <span
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${ButtonBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'left',
          }}
        />
        <span style={{ left: '20px' }} className="relative z-20">Discover Events</span>
      </button >
    </div>
  );
}

export default Events;
