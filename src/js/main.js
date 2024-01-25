console.log("    ________________________________________________\n   /  ____  *        *       *    _   _   *     __  \u005c\n  /  |  _ \u005c  _    *       *    _ | | / / _  _* / _|  \u005c\n /   | |_) |(_) ___  ___  ___ | || |/ / | |(_)| |_    \u005c\n{----|  __/  _ / _ \u005c/ __|/ _ \u005c| ||   {  | | _ |  _|----}\n \u005c   | |    | || __/\u005c__ \u005c| __/| || |\u005c \u005c | || || |     /\n  \u005c  |_|    |_|\u005c___||___/\u005c___||_||_| \u005c_\u005c|_||_||_|    /\n   \u005c______________pieselklif.github.io______________/\n");

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

document.getElementById("menu-button").addEventListener("click", toggleMenu);