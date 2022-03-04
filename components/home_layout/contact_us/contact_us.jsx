import { baseUrl } from "configs/index";
import axios from "axios";
import React, { useState } from "react";

const Contact_us = () => {
	const [name, setName] = useState("");
	const [email, setemail] = useState("");
	const [phone, setphone] = useState("");
	const [subject, setsubject] = useState("");
	const [description, setdescription] = useState("");
	const [sent, setsent] = useState(false);

	return (
		<section className='contact_us p-top p-bottom' id='contact_us'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading'>
							<h2>Contact Us</h2>
						</div>
					</div>
				</div>
				<div className='row g-0'>
					<div className='col-md-8'>
						{sent ? (
							<h2>Message sent</h2>
						) : (
							<div className='form_col'>
								<h3>Send Message</h3>

								<form
									onSubmit={async (e) => {
										e.preventDefault();
										const body = {
											name,
											email,
											phone,
											subject,
											description,
										};
										await axios
											.post(`${baseUrl}/home/contact`, body, {
												headers: {
													"Content-type": "application/json",
												},
											})
											.then((d) => {
												if (d.data.status) {
													setName("");
													setemail("");
													setphone("");
													setsubject("");
													setdescription("");
													setsent(true);
												}
											});
									}}>
									<div className='mb-3'>
										<input
											type='text'
											className='form-control'
											placeholder='  Your full name'
											aria-describedby='emailHelp'
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className='mb-3'>
										<input
											type='email'
											className='form-control'
											placeholder='Your email address'
											aria-describedby='emailHelp'
											value={email}
											onChange={(e) => setemail(e.target.value)}
										/>
									</div>
									<div className='mb-3'>
										<input
											type='text'
											className='form-control'
											placeholder='  Your Phone Number'
											aria-describedby='emailHelp'
											value={phone}
											onChange={(e) => setphone(e.target.value)}
										/>
									</div>
									<div className='mb-3'>
										<input
											type='text'
											className='form-control'
											placeholder='  Your Subject'
											aria-describedby='emailHelp'
											value={subject}
											onChange={(e) => setsubject(e.target.value)}
										/>
									</div>
									<div className='mb-3'>
										<textarea
											className='form-control'
											placeholder='What you are looking for?'
											rows='3'
											value={description}
											onChange={(e) =>
												setdescription(e.target.value)
											}></textarea>
									</div>
									<button type='submit' className='btn btn-primary'>
										Submit Now
									</button>
								</form>
							</div>
						)}
					</div>
					<div className='col-md-4'>
						<div className='contact_info'>
							<div className='contact_details'>
								<h4>Details</h4>

								<div className='single-contact-info'>
									<h5>Address</h5>
									<p>
										88 New Street, Washington DC <br /> United States, America
									</p>
								</div>
								<div className='single-contact-info'>
									<h5>Phone</h5>
									<p>
										<a href='tel:+971563608064'> Whatsapp: +971563608064</a>{" "}
										<br />{" "}
										<a href='tel:+971563015625'> Whatsapp: +971563015625</a>
									</p>
								</div>
								<div className='single-contact-info'>
									<h5>Email</h5>
									<p>
										<a href='mailto:advertisingnajmat@gmail.com'>
											{" "}
											advertisingnajmat@gmail.com
										</a>
									</p>
								</div>
								<div className='single-contact-info '>
									<h5>Follow</h5>
									<div className='social'>
										<ul className='social_ul'>
											<li>
												<a href='#'>
													<img src='/img/fb.png' className='img-fluid' alt='' />
												</a>
											</li>
											<li>
												<a href='#'>
													<img src='/img/tw.png' className='img-fluid' alt='' />
												</a>
											</li>
											<li>
												<a href='#'>
													<img src='/img/in.png' className='img-fluid' alt='' />
												</a>
											</li>
											<li>
												<a href='#'>
													<img
														src='/img/ins.png'
														className='img-fluid'
														alt=''
													/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact_us;
