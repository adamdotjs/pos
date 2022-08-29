import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";

const ProductsPage = () => {
	const router = useRouter();
	const { category } = router.query;
	const { data, error } = useSWR(`/api/products?type=${category}`, fetcher);

	if (error) return <div>An error occurred.</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<div>
			<h1 className="text-3xl font-bold">
				{category[0].toUpperCase() + category.slice(1).toLowerCase()} Products
			</h1>
			<ul className="mt-12">
				{data.length > 0 &&
					data.map((product) => (
						<li key={product.id}>
							<Link href={`/products/${category}/${product.id}`}>
								<div className="flex items-center gap-4">
									<div className="relative aspect-square w-24">
										<Image
											unoptimized
											src={`data:image/jpeg;base64, ${product.picture}`}
											layout="fill"
											objectFit="contain"
											alt={product.product}
										></Image>
									</div>
									<span>{product.product}</span>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default ProductsPage;
