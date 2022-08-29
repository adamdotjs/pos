export const fetcher = async (url) => {
	const res = await fetch(`https://api2.tigerpress.com` + url, {
		headers: {
			Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			"Content-Type": "application/json",
			Accept: "application/json",
			Origin: window.location.hostname,
		},
	});
	return await res.json();
};
