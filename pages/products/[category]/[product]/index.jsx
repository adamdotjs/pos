import { useRouter } from "next/router";

const ProductPage = () => {
	const router = useRouter();
	const { category, product } = router.query;

	return (
		<h1>
			{category} - {product}
		</h1>
	);
};

export default ProductPage;
