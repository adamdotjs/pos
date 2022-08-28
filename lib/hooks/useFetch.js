import { useEffect, useState } from "react";

export const useFetch = (url, refreshParam) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(url, {
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
				Accept: "application/json",
				Origin: window.location.hostname,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
			});
	}, [refreshParam]);

	return { isLoading, data, error };
};
