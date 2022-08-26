import Shell from "../components/layout/Shell";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Shell>
			<Component {...pageProps} />
		</Shell>
	);
}

export default MyApp;
