import React from "react";
import Link from "next/link";

const Footer = ({ category }) => {
	return (
		<footer>
			<div className='footer padding-top'>
				<div className='container'>
					<div className='row ft_row'>
						<div className='col-md-4 col-lg-3 col-sm-6'>
							<div className='footer-logo'>
								<Link href='/'>
									<a className='navbar-brand' href='#'>
										Najmat Al Rawnaq
									</a>
								</Link>
								<ul className='contact_ul'>
									<li>
										<a href='mailto:advertisingnajmat@gmail.com'>
											<i className='fas fa-envelope'></i>
											advertisingnajmat@gmail.com
										</a>
									</li>
									<li>
										<a href='tel:+971563608064' className='nav_link'>
											<i className='fab fa-whatsapp'></i> +971563608064
										</a>
									</li>
									<li>
										<a href='tel:+971563015625' className='nav_link'>
											<i className='fab fa-whatsapp'></i> +971563015625
										</a>
									</li>
								</ul>
								<ul className='social_ul'>
									<li>
										<a href='#'>
											<img
												src='/img/fb.png'
												className='img-fluid'
												alt='Facebook '
											/>
										</a>
									</li>
									<li>
										<a href='#'>
											<img
												src='/img/tw.png'
												className='img-fluid'
												alt='Twitter'
											/>
										</a>
									</li>
									<li>
										<a href='#'>
											<img
												src='/img/in.png'
												className='img-fluid'
												alt='LinkedIn'
											/>
										</a>
									</li>
									<li>
										<a href='#'>
											<img
												src='/img/ins.png'
												className='img-fluid'
												alt='Instagram'
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-2 col-lg-3 col-sm-6'>
							<div className='links'>
								<h4>Quick Links</h4>
								<ul className='links-ul'>
									<li>
										<Link href='/about_us'>
											<a>About Us</a>
										</Link>
									</li>
									<li>
										<Link href='/#Services'>
											<a>Our Services</a>
										</Link>
									</li>
									<li>
										<Link href='/#Project'>
											<a>Projects</a>
										</Link>
									</li>
									<li>
										<Link href='/#our_clients'>
											<a>Our Clients</a>
										</Link>
									</li>
									<li>
										<Link href='/#contact_us'>
											<a>Contact Us</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='links'>
								<h4>Our Services</h4>
								<ul className='links-ul service_ul'>
									{category
										? category.map((c) => {
												return (
													<li>
														<Link
															href={`/service/${c.replace(" ", "-")}/${"1"}`}>
															<a>{c}</a>
														</Link>
													</li>
												);
										  })
										: ""}
								</ul>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='footer_bar'>
								<p>
									Copyright © 2022 <a href='#'>najmatalrawnaq.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				className='top_btn'
				id='scrolltop'
				title='Go to top'
				onClick={() => {
					window.scrollTo(0, 0);
				}}>
				<i className='fas fa-chevron-up'></i>
			</button>
		</footer>
	);
};

export default Footer;
