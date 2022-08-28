import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { LINKS } from "../../LINKS";

const Dropdown = ({ icon, name, sublinks }) => {
	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className="w-full">
						<span className="flex items-center gap-3 rounded-lg py-2 px-4 text-gray-900 transition-colors hover:bg-white">
							<span className="text-xl">{icon}</span>
							{name}
							<HiChevronDown className={`${open ? "rotate-180" : ""} ml-auto`} />
						</span>
					</Menu.Button>
					<Menu.Items className="ml-7">
						{sublinks.map((link) => (
							<Menu.Item key={link.path}>
								{({ active }) => (
									<Link href={link.path}>
										<a
											className={`${
												active ? "bg-white text-black" : ""
											} flex items-center gap-3 rounded-lg py-2 px-4 text-gray-900 transition-colors hover:bg-white`}
										>
											<span className="text-2xl">{link.icon}</span>
											{link.name}
										</a>
									</Link>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
				</>
			)}
		</Menu>
	);
};

const Sidebar = () => {
	return (
		<aside className="flex h-full min-h-screen w-80 flex-col gap-8 bg-blue-100 p-8">
			<Link href="/">
				<a>
					<Image src="/logo-blue.svg" alt="TigerPress" width="200" height="80" />
				</a>
			</Link>
			<nav>
				<ul className="flex flex-col gap-2">
					{LINKS.map((link) => {
						return link.sublinks ? (
							<li key={link.path}>
								<Dropdown name={link.name} icon={link.icon} sublinks={link.sublinks} />
							</li>
						) : (
							<li key={link.path}>
								<Link href={link.path}>
									<a className="flex items-center gap-3 rounded-lg py-2 px-4 text-gray-900 transition-colors hover:bg-white">
										<span className="text-2xl">{link.icon}</span>
										{link.name}
									</a>
								</Link>
							</li>
						);
					})}
					<li></li>
				</ul>
			</nav>
			<div>
				<figure></figure>
			</div>
		</aside>
	);
};

export default Sidebar;
