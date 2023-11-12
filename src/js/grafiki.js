function close_viewer() {
	document.getElementById("img-viewer").classList.add("close-viewer");
}

function open_viewer(event) {
	var img_src = event.currentTarget.getAttribute("data-text");

	document.getElementById("img-viewer-img").src = img_src;
	document.getElementById("img-viewer").classList.remove("close-viewer");
}

document.getElementById("close-img-viewer").addEventListener("click", close_viewer);
document.getElementById("img-viewer").addEventListener("click", close_viewer);

// IMG BUTTONS
document.getElementById("open-img-1").addEventListener("click", open_viewer);
document.getElementById("open-img-2").addEventListener("click", open_viewer);
document.getElementById("open-img-3").addEventListener("click", open_viewer);
document.getElementById("open-img-4").addEventListener("click", open_viewer);
document.getElementById("open-img-5").addEventListener("click", open_viewer);
document.getElementById("open-img-6").addEventListener("click", open_viewer);
document.getElementById("open-img-7").addEventListener("click", open_viewer);
document.getElementById("open-img-8").addEventListener("click", open_viewer);
document.getElementById("open-img-9").addEventListener("click", open_viewer);
document.getElementById("open-img-10").addEventListener("click", open_viewer);
document.getElementById("open-img-11").addEventListener("click", open_viewer);