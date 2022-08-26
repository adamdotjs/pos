import { useState } from "react";

const HomePage = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("https://testapi.tigerpress.com/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Origin: window.location.hostname,
			},
			body: JSON.stringify({ username, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				window.localStorage.setItem("token", data.token);
				console.log(data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="flex h-full w-full flex-col items-center justify-center text-center">
			<h1 className="text-3xl font-bold text-blue-400">TigerPress POS</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							className="border px-2 py-1 text-inherit"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							name="password"
							id="password"
							className="border px-2 py-1 text-inherit"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className="rounded-full border border-gray-300 bg-gray-200 px-6 py-3">
						Sign in
					</button>
				</form>
			</div>
		</div>
	);
};

export default HomePage;
