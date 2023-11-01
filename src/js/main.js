var menuIsOpen = true;
var isPhone = false;

function openPanel() {
	document.getElementById("left-panel").classList.remove('close');
	if (!isPhone)
	{
		document.getElementById("content").classList.remove('full');
	}
}

function closePanel() {
	document.getElementById("left-panel").classList.add('close');
	if (!isPhone)
	{
		document.getElementById("content").classList.add('full');
	}
}

function toggleMenu() {
	if (document.getElementById("left-panel").className == "left-panel close")
	{
		openPanel()
	}else{
		closePanel()
	}
}

if (screen.width <= 700)
{
	isPhone = true;
} else {
	openPanel()
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);