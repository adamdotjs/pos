import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LINKS } from "../../LINKS";

const Dropdown = ({ icon, name, sublinks }) => {
	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button>
						<span className="flex items-center gap-3 rounded-lg py-2 px-4 text-white transition-colors hover:bg-white/30">
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
											} flex items-center gap-3 rounded-lg py-2 px-4 text-white transition-colors hover:bg-white/30`}
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

export default function MobileNav() {
	return (
		<header className="flex h-24 w-full items-center justify-between bg-blue-500 p-8">
			<Link href="/">
				<a>
					<img src="/logo-white.svg" alt="TigerPress" width={200} />
				</a>
			</Link>
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button className="relative">
							<span>
								{open ? (
									<HiOutlineX className="text-4xl text-white" />
								) : (
									<HiOutlineMenu className="text-4xl text-white" />
								)}
							</span>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute right-0 w-64">
								<nav className="bg-blue-600 p-4">
									<ul className="flex flex-col gap-2">
										{LINKS.map((link) => {
											return link.sublinks ? (
												<li key={link.path}>
													<Dropdown name={link.name} icon={link.icon} sublinks={link.sublinks} />
												</li>
											) : (
												<li key={link.path}>
													<Link href={link.path}>
														<a className="flex items-center gap-3 rounded-lg py-2 px-4 text-white transition-colors hover:bg-white/30">
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
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</header>
	);
}
