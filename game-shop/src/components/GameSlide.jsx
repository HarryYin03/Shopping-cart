import React from 'react'
import { SwiperSlide } from 'swiper/react';


function GameSlide({game, active, toggleVideo }) {
  return (
      <SwiperSlide >
          <div className="gameSlider">
              <img src={game.img} alt="Games Image" />
              <div className={`video ${active ? 'active' : undefined}`}>
                  <iframe
                      width="1280"
                      height="720"
                      src={game.trailer}
                      title={game.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
              <div className="content">
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                  <div className="buttons">
                      <a href="#" className="orderBtn">
                          Order Now
                      </a>
                      <a href="#" className={`playBtn ${active ? 'active' : undefined}`} onClick={toggleVideo}>
                          <span className="pause">
                              <i class="bi bi-pause"></i>
                          </span>
                          <span className="play">
                              <i class="bi bi-play"></i>
                          </span>
                      </a>

                  </div>
              </div>

          </div>
      </SwiperSlide>
  )
}

export default GameSlide
