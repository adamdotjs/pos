import {
	HiOutlineAdjustments,
	HiOutlineArchive,
	HiOutlineBookOpen,
	HiOutlineCollection,
	HiOutlineCurrencyDollar,
	HiOutlineDocumentReport,
	HiOutlineFingerPrint,
	HiOutlineFlag,
	HiOutlinePlusCircle,
	HiOutlineShoppingBag,
	HiOutlineSpeakerphone,
	HiOutlineTruck,
	HiOutlineUsers,
} from "react-icons/hi";

export const LINKS = [
	{
		name: "New estimate",
		path: "/pricing",
		icon: <HiOutlineAdjustments />,
		sublinks: [
			{
				name: "Digital",
				path: "/products/digital",
				icon: <HiOutlineFingerPrint />,
			},
			{
				name: "Offset",
				path: "/products/offset",
				icon: <HiOutlineBookOpen />,
			},
			{
				name: "Signage",
				path: "/products/signage",
				icon: <HiOutlineFlag />,
			},
			{
				name: "Mailing",
				path: "/products/mailing",
				icon: <HiOutlineTruck />,
			},
		],
	},
	{
		name: "Create job",
		path: "/job",
		icon: <HiOutlinePlusCircle />,
		sublinks: [
			{
				name: "Outside printing",
				path: "/outside",
				icon: <HiOutlineUsers />,
			},
			{
				name: "Promotional order",
				path: "/promo",
				icon: <HiOutlineSpeakerphone />,
			},
		],
	},
	{
		name: "My job list",
		path: "/cart",
		icon: <HiOutlineShoppingBag />,
	},
	{
		name: "View estimates",
		path: "/estimates",
		icon: <HiOutlineArchive />,
	},
	{
		name: "View jobs",
		path: "/jobs",
		icon: <HiOutlineCollection />,
	},
	{
		name: "View invoices",
		path: "/invoices",
		icon: <HiOutlineCurrencyDollar />,
	},
	{
		name: "Reports",
		path: "/reports",
		icon: <HiOutlineDocumentReport />,
	},
];
