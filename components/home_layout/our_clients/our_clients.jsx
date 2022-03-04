import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";
const Our_clients = () => {
	return (
		<section className='our_clients_sec p-top p-bottom' id='our_clients'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading'>
							<h2>Our Clients</h2>
						</div>
					</div>
				</div>
				<div className='our_clients'>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							320: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							640: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 6,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 6,
								spaceBetween: 40,
							},
						}}
						modules={[Autoplay]}
						className='clientSlider'>
						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_1.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_2.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_3.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_4.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_5.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_6.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='client-img'>
								<img src='/img/client_7.png' className='img-fluid' alt='' />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Our_clients;
