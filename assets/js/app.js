console.log("    ________________________________________________\n   /  ____  *        *       *    _   _   *     __  \u005c\n  /  |  _ \u005c  _    *       *    _ | | / / _  _* / _|  \u005c\n /   | |_) |(_) ___  ___  ___ | || |/ / | |(_)| |_    \u005c\n{----|  __/  _ / _ \u005c/ __|/ _ \u005c| ||   {  | | _ |  _|----}\n \u005c   | |    | || __/\u005c__ \u005c| __/| || |\u005c \u005c | || || |     /\n  \u005c  |_|    |_|\u005c___||___/\u005c___||_||_| \u005c_\u005c|_||_||_|    /\n   \u005c______________pieselklif.github.io______________/\n");

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
