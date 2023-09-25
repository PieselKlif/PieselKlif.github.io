var menuIsOpen = true;

function toggleMenu() {
	menuIsOpen = !menuIsOpen;

	if (menuIsOpen)
	{
		document.getElementById("left-panel").style.display = "block";
		document.getElementById("menu-button").style.marginLeft = "-70px";
	}else{
		document.getElementById("left-panel").style.display = "none";
		document.getElementById("menu-button").style.marginLeft = "0px";
	}
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);