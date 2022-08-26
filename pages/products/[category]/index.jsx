import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://testapi.tigerpress.com/api/products", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
				Accept: "application/json",
				Origin: window.location.hostname,
			},
		})
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	console.log(products);

	const router = useRouter();
	const { category } = router.query;
	const activeProducts = products.filter((product) => product.category === category);

	return (
		<div>
			<h1 className="text-3xl font-bold">
				{category[0].toUpperCase() + category.slice(1).toLowerCase()} Products
			</h1>
			<ul className="mt-12">
				{products.length > 0 &&
					products.map((product) => (
						<li key={product.id}>
							<Link href={`/products/${category}/${product.id}`}>{product.product}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default ProductsPage;
