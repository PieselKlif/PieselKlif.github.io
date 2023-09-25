var menuIsOpen = true;

function toggleMenu() {
	//  TODO zrobić jakąś animacje otwierania i zamykania. Może dawać left-panel display jako absolute, i tak nie będzie widać.

	if (document.getElementById("left-panel").style.display == "none")
	{
		document.getElementById("left-panel").style.display = "block";
	}else{
		document.getElementById("left-panel").style.display = "none";
	}
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);