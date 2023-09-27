var menuIsOpen = true;
var isPhone = false;

function toggleMenu() {
	if (document.getElementById("left-panel").className == "left-panel close")
	{
		document.getElementById("left-panel").classList.remove('close');
		document.getElementById("menu-button").classList.add('open');
		if (!isPhone)
		{
			document.getElementById("content").classList.remove('full');
		}
	}else{
		document.getElementById("left-panel").classList.add('close');
		document.getElementById("menu-button").classList.remove('open');
		if (!isPhone)
		{
			document.getElementById("content").classList.add('full');
		}
	}
}

if (screen.width <= 700)
{
	isPhone = true;
} else {
	document.getElementById("content").classList.remove('full');
	document.getElementById("left-panel").classList.remove('close');
	document.getElementById("menu-button").classList.add('open');
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);