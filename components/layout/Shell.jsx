import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const Shell = ({ children }) => {
	return (
		<div className="lg:flex">
			<div className="lg:hidden">
				<MobileNav />
			</div>
			<div className="hidden lg:block">
				<Sidebar />
			</div>
			<main className="mx-auto max-w-4xl flex-1 px-8 py-24">{children}</main>
		</div>
	);
};

export default Shell;
