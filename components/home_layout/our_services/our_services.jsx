import React from "react";
import Link from "next/link";
import Image from "next/image";
import Service_1 from "../../../public/img/service_1.jpg";
import Service_2 from "../../../public/img/service_2.jpg";
import Service_3 from "../../../public/img/service_3.jpg";
import Service_4 from "../../../public/img/service_4.jpg";
import Service_5 from "../../../public/img/service_5.jpg";
import Service_6 from "../../../public/img/service_6.jpg";
import Service_7 from "../../../public/img/service_7.jpg";
import Service_8 from "../../../public/img/service_8.jpg";
import Service_9 from "../../../public/img/service_9.jpg";
import Service_10 from "../../../public/img/service_10.jpg";
import Service_11 from "../../../public/img/service_11.jpg";
import Service_12 from "../../../public/img/service_12.jpg";

const Our_services = ({ service }) => {
	return (
		<section className='our_service_sec p-top' id='Services'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading'>
							<h2>Our Services</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					{service.length
						? service.map((s) => {
								console.log(s.home);
								return (
									<div className='col-md-3 col-6' key={s._id}>
										<div className='service_card'>
											<Link
												href={`/service/${s.category.replace(" ", "-")}/${
													s._id
												}`}>
												<a>
													<Image
														src={s.image}
														loader={() => s.image}
														width={"200px"}
														height={"150px"}
														layout='responsive'
														alt=''
													/>
													<div className='content'>{s.title}</div>
												</a>
											</Link>
										</div>
									</div>
								);
						  })
						: ""}
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='view_button text-center'>
							<Link href='/service'>
								<a className='btn btn-primary'>View All</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Our_services;
