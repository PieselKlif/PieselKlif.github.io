var menuIsOpen = true;

function toggleMenu() {
	menuIsOpen = !menuIsOpen;

	if (menuIsOpen)
	{
		document.getElementById("left-panel").style.display = "block";
	}else{
		document.getElementById("left-panel").style.display = "none";
	}
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);