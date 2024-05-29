export function convertDateString(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString();
}
