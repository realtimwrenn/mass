
function addFullscreenToggleFunctionality() {
	let fullScreenButton = document.getElementById("fullscreen-btn");
	let exitFullScreenButton = document.getElementById("exit-fullscreen-btn");

	fullScreenButton.addEventListener("click", function () {
		let elem = document.documentElement;

		if (!document.fullscreenElement) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			}
			fullScreenButton.style.display = "none";
			exitFullScreenButton.style.display = "block";
		}
	});

	exitFullScreenButton.addEventListener("click", function () {
		if (document.fullscreenElement) {
			document.exitFullscreen();
			fullScreenButton.style.display = "block";
			exitFullScreenButton.style.display = "none";
		}
	});

	document.addEventListener("fullscreenchange", function () {
		if (!document.fullscreenElement) {
			fullScreenButton.style.display = "block";
			exitFullScreenButton.style.display = "none";
		}
	});
}
