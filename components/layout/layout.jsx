import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { baseUrl } from "@/configs/index";
import axios from "axios";

export default function Layout({ children }) {
	const [category, setcategory] = useState("");

	useEffect(() => {
		(async function () {
			const response3 = await axios.get(
				`${baseUrl}/home/settings?key=${"category"}`
			);

			if (response3.data.status) {
				setcategory(response3.data.data);
			}
		})();
	}, []);

	return (
		<>
			<Header category={category} />
			<main>{children}</main>
			<Footer category={category} />
		</>
	);
}
