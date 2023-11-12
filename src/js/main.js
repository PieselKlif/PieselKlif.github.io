var isPhone = false;

function desktop() {
	document.getElementById("left-panel").classList.add('desktop');
	document.getElementById("left-panel").classList.remove('close');
	if (!isPhone)
	{
		document.getElementById("content").classList.add('desktop');
		document.getElementById("content").classList.remove('full');
	}
}

function openPanel() {
	document.getElementById("left-panel").classList.remove('close');
	if (!isPhone)
	{
		document.getElementById("content").classList.remove('full');
	}
}

function closePanel() {
	document.getElementById("left-panel").classList.add('close');
	document.getElementById("left-panel").classList.remove('desktop');
	if (!isPhone)
	{
		document.getElementById("content").classList.add('full');
		document.getElementById("content").classList.remove('desktop');
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

// TODO zrobić to w css
if (screen.width <= 700)
{
	isPhone = true;
} else {
	desktop()
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);