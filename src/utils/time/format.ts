export function formatTime(date: Date | number) {
	const intl = new Intl.DateTimeFormat('en-US', {
		hour12: true,
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});

	return intl.format(new Date(date));
}
