import React from "react"
import "../../styles/testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png"
import avatar02 from "../../assets/img/avatar02.png"

export default function Testimonials() {
  return (
    <>
        <section>
            <div className="container sliders">

                <h2 className="section_title">Testimonials</h2>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">        
                    <SwiperSlide>
                        <div className="slide_item">
                            <div className="slide_img-01">
                                <img src={avatar01} alt="" />
                            </div>
                            <h4>Jessica Fernandes</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptas modi non velit officia quasi quibusdam hic commodi earum ab in culpa, est reprehenderit laudantium minus! Modi, odio distinctio. Ab.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide_item">
                            <div className="slide_img-02">
                                <img src={avatar02} alt="" />
                            </div>
                            <h4>Jessica Fernandes</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptas modi non velit officia quasi quibusdam hic commodi earum ab in culpa, est reprehenderit laudantium minus! Modi, odio distinctio. Ab.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    </>
  );
}
