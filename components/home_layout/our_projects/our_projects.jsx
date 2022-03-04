import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";

const Our_projects = ({ project, title }) => {
	console.log({ project });
	return (
		<section className='our_project_sec p-top' id='Project'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading'>
							<h2>{title ? title : "Our Projects"}</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='gallery_card'>
							<Gallery>
								{project.length
									? project.map((p) => {
											return (
												<Item
													original={p.image}
													thumbnail={p.image}
													width='1024'
													height='768'
													title={p.title}>
													{({ ref, open }) => (
														<img ref={ref} onClick={open} src={p.image} />
													)}
												</Item>
											);
									  })
									: ""}
							</Gallery>
						</div>
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

export default Our_projects;
