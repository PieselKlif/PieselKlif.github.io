document.querySelectorAll("nav a").forEach(navLink => {
	navLink.addEventListener("click", (e) => {
			e.preventDefault();

			document.querySelector("nav a.active").classList.remove("active");

			navLink.classList.add("active");

			const target = navLink.getAttribute("data-target");

			document.querySelector("main section.active").classList.remove("active");

			document.getElementById(target).classList.add("active");
	});
});
