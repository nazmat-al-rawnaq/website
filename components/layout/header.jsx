import React from "react";
import Link from "next/link";

const Header = ({ category }) => {
	console.log({ category });
	return (
		<header>
			<div className='top_bar'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='top_column'>
								<ul className='contact_ul'>
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
									<li>
										<a
											href='mailto:advertisingnajmat@gmail.com'
											className='nav_link'>
											<i className='fas fa-envelope'></i>{" "}
											advertisingnajmat@gmail.com
										</a>
									</li>
								</ul>
								<ul className='location_ul'>
									<li>
										<a href='#' className='location' className='nav_link'>
											<i className='fas fa-map-marker-alt'></i> Dubai, UAE
										</a>
									</li>
									<li>
										<a href='#contact_us' className='btn btn-primary'>
											Get A Quote
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link href='/'>
						<a className='navbar-brand'>
							<img src='/img/logo.png' className='img-fluid' alt='' />
						</a>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasNavbar'
						aria-controls='offcanvasNavbar'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='offcanvas offcanvas-start'
						tabIndex={-1}
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'>
						<div className='offcanvas-header'>
							<Link href='/'>
								<a className='navbar-brand'>
									<img src='/img/logo.png' className='img-fluid' alt='' />
								</a>
							</Link>
							<button
								type='button'
								className='btn-close text-reset'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-center flex-grow-1 pe-3'>
								<li className='nav-item'>
									<Link href='/'>
										<a className='nav-link'>Home</a>
									</Link>
								</li>
								<li className='nav-item'>
									<Link href='/about_us'>
										<a className='nav-link'>About</a>
									</Link>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='/#Services'
										id='offcanvasNavbarDropdown'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'>
										Our Services
									</a>
									<ul
										className='dropdown-menu'
										aria-labelledby='offcanvasNavbarDropdown'>
										{category
											? category.map((c) => {
													return (
														<li>
															<Link
																href={`/service/${c.replace(" ", "-")}/${"1"}`}>
																<a className='dropdown-item'>{c}</a>
															</Link>
														</li>
													);
											  })
											: ""}
									</ul>
								</li>
								<li className='nav-item'>
									<Link href='/#Project'>
										<a className='nav-link'>Projects</a>
									</Link>
								</li>
								<li className='nav-item'>
									<Link href='/#our_clients'>
										<a className='nav-link'>Our Clients</a>
									</Link>
								</li>
								<li className='nav-item'>
									<Link href='/#contact_us'>
										<a className='nav-link'>Contact Us</a>
									</Link>
								</li>
							</ul>
							<div className='social_media d-flex'>
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
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
