var menuIsOpen = true;

function toggleMenu() {
	if (document.getElementById("left-panel").className == "left-panel close")
	{
		document.getElementById("left-panel").classList.remove('close');
		document.getElementById("content").classList.remove('full');
	}else{
		document.getElementById("left-panel").classList.add('close');
		document.getElementById("content").classList.add('full');
	}
}

// TODO naprawic lewy panel na telefonach

// if (screen.width <= 700)
// {
// 	document.getElementById("left-panel").style.display = "none";
// } else {
// 	document.getElementById("left-panel").style.display = "block";
// }

document.getElementById("menu-button").addEventListener("click", toggleMenu);