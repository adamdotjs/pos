import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
	const router = useRouter();
	const { category } = router.query;
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://api2.tigerpress.com/api/products?type=${category}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
				Accept: "application/json",
				Origin: window.location.hostname,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setIsLoading(false);
			});
	}, [category]);
	console.log(products);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (!isLoading) {
		return (
			<div>
				<h1 className="text-3xl font-bold">
					{category[0].toUpperCase() + category.slice(1).toLowerCase()} Products
				</h1>
				<ul className="mt-12">
					{products.length > 0 &&
						products.map((product) => (
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
	}
};

export default ProductsPage;
