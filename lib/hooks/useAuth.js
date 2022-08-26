export const useAuth = () => {
	const token = JSON.parse(window.localStorage.getItem(token));
	return token;
};
