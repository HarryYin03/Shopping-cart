import React, { useState } from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './gameSwiper.css'
import GameSlide from './GameSlide';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  const handleToggleVideo = () => {
    setActive(!active);
  }
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map(game => (
        <SwiperSlide key={game._id}>
          <GameSlide
            active={active}
            toggleVideo={handleToggleVideo}
            game={game}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper
