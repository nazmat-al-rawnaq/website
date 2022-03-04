import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slide from "../../../public/img/slide_1.jpg";
import Slide_2 from "../../../public/img/slide_2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
const Hero_sec = ({ banner }) => {
	return (
		<section className='hero-sec'>
			<div className='conatiner'>
				<div className='row g-0'>
					<div className='col-md-6'>
						<div className='content'>
							<div className='content_in'>
								<h4>Welcome to Najmat Al Rawnaq</h4>
								<h1>Modern Printing Agency </h1>

								<a href='#' className='btn btn-primary'>
									discover more{" "}
									<span className='icon'>
										{" "}
										<i className='fas fa-angle-right'></i>
									</span>{" "}
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='hero_slider'>
							<Swiper
								navigation={true}
								loop={true}
								modules={[Navigation]}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								modules={[Autoplay, Navigation]}
								className='mySwiper'>
								{banner.length
									? banner.map((b) => {
											console.log(b.image);
											return (
												<SwiperSlide>
													<div className='home_slide'>
														<Image
															src={b.image}
															layout='fill'
															alt=''
															loader={() => b.image}
														/>
													</div>
												</SwiperSlide>
											);
									  })
									: ""}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// #endregion

export default Hero_sec;
