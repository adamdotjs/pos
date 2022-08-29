import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../../lib/fetcher";

const ProductPage = () => {
	const router = useRouter();
	const { category, product } = router.query;
	const { data, error } = useSWR(`/api/product?estimate=${product}`, fetcher);
	console.log(data);

	if (!data) return <div>Loading...</div>;
	if (error) return <div>An error occurred.</div>;

	return (
		<>
			<h1>
				{category} - {product}
			</h1>
			<form>
				<p>{JSON.stringify(data)}</p>
			</form>
		</>
	);
};

export default ProductPage;
