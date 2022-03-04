import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/layout/layout";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<DefaultSeo
				title='Najmat Al Rawnaq | BillBoards Adertising'
				description='Information on billboards, billboard advertising and managing billboard campaigns throughout the Dubai and elsewhere.
			'
			/>
			<Component {...pageProps} />
		</Layout>
	);
}
