var menuIsOpen = true;
var isPhone = false;

function toggleMenu() {
	if (document.getElementById("left-panel").className == "left-panel close")
	{
		document.getElementById("left-panel").classList.remove('close');
		if (!isPhone)
		{
			document.getElementById("content").classList.remove('full');
		}
	}else{
		document.getElementById("left-panel").classList.add('close');
		if (!isPhone)
		{
			document.getElementById("content").classList.add('full');
		}
	}
}

// TODO naprawic lewy panel na telefonach

if (screen.width <= 700)
{
	isPhone = true;

	// document.getElementById("left-panel").style.display = "none";
} else {
	document.getElementById("content").classList.remove('full');
	document.getElementById("left-panel").classList.remove('close');
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);