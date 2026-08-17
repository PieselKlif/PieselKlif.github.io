document.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight } = document.documentElement;
	const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;

	document.querySelector('#progress-bar').style.width = scrollPercent;
});