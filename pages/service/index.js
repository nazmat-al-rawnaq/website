import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import Our_services from "@/components/home_layout/our_services/our_services";
import axios from "axios";
import { baseUrl } from "../../configs/index";
import { useEffect, useState } from "react";

export default function Home() {
	const [service, setservice] = useState("");

	useEffect(() => {
		(async function () {
			const response = await axios.get(`${baseUrl}/home/service`);
			if (response.data.status) {
				setservice(response.data.data);
			}
		})();
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
					integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
					crossorigin='anonymous'
				/>

				<script src='/script/jquery-3.6.0.min.js' />
				<script src='/script/bootstrap.bundle.min.js' />
				<script src='/script/script.js' />
			</Head>

			<Our_services service={service} />
			<div className='p-bottom'></div>
		</>
	);
}
