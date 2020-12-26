const btnGet = document.querySelector(".get-picture-button");
const btnBig = document.querySelector(".selection-button-big");
const btnMid = document.querySelector(".selection-button-mid");
const btnSmall = document.querySelector(".selection-button-small");
const btnGray = document.querySelector(".get-picture-gray");
const btnBlur = document.querySelector(".get-picture-blur");
const picture = document.querySelector("img");
const randomID = Math.floor(Math.random() * 750);

btnBig.addEventListener("click", (e) => {
	e.preventDefault();
	picture.src = `https://picsum.photos/id/${randomID}/1600/800.jpg`;
	btnBig.classList.add("current");
	if (btnMid.classList.contains("current")) {
		btnMid.classList.remove("current");
	} else if (btnSmall.classList.contains("current")) {
		btnSmall.classList.remove("current");
	}
});

btnMid.addEventListener("click", (e) => {
	e.preventDefault();
	picture.src = `https://picsum.photos/id/${randomID}/1000/600.jpg`;
	btnMid.classList.add("current");
	if (btnBig.classList.contains("current")) {
		btnBig.classList.remove("current");
	} else if (btnSmall.classList.contains("current")) {
		btnSmall.classList.remove("current");
	}
});

btnSmall.addEventListener("click", (e) => {
	e.preventDefault();
	picture.src = `https://picsum.photos/id/${randomID}/300/200.jpg`;
	btnSmall.classList.add("current");
	if (btnBig.classList.contains("current")) {
		btnBig.classList.remove("current");
	} else if (btnMid.classList.contains("current")) {
		btnMid.classList.remove("current");
	}
});

btnBlur.addEventListener("click", (e) => {
	e.preventDefault();
	if (picture.src.indexOf("blur") == -1) {
		btnBlur.classList.add("current");
		const buttons = [btnBig, btnMid, btnSmall];
		buttons.forEach((button) => {
			if (button.classList.contains("current") && button.classList.contains("selection-button-big")) {
				picture.src = `https://picsum.photos/id/${randomID}/1600/800.jpg?blur`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-mid")) {
				picture.src = `https://picsum.photos/id/${randomID}/1000/600.jpg?blur`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-small")) {
				picture.src = `https://picsum.photos/id/${randomID}/300/200.jpg?blur`;
			}
		});
	} else {
		btnBlur.classList.remove("current");
		const buttons = [btnBig, btnMid, btnSmall];
		buttons.forEach((button) => {
			if (button.classList.contains("current") && button.classList.contains("selection-button-big")) {
				picture.src = `https://picsum.photos/id/${randomID}/1600/800.jpg`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-mid")) {
				picture.src = `https://picsum.photos/id/${randomID}/1000/600.jpg`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-small")) {
				picture.src = `https://picsum.photos/id/${randomID}/300/200.jpg`;
			}
		});
	}
});

btnGet.addEventListener("click", () => {
	const buttons = [btnBig, btnMid, btnSmall];
	buttons.forEach((button) => {
		if (button.classList.contains("current")) {
			const pictureURL = picture.src;
			window.open(pictureURL);
		}
	});
});

btnGray.addEventListener("click", (e) => {
	e.preventDefault();
	if (picture.src.indexOf("gray") == -1) {
		btnGray.classList.add("current");
		const buttons = [btnBig, btnMid, btnSmall];
		buttons.forEach((button) => {
			if (button.classList.contains("current") && button.classList.contains("selection-button-big")) {
				picture.src = `https://picsum.photos/id/${randomID}/1600/800.jpg?grayscale`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-mid")) {
				picture.src = `https://picsum.photos/id/${randomID}/1000/600.jpg?grayscale`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-small")) {
				picture.src = `https://picsum.photos/id/${randomID}/300/200.jpg?grayscale`;
			}
		});
	} else {
		btnGray.classList.remove("current");
		const buttons = [btnBig, btnMid, btnSmall];
		buttons.forEach((button) => {
			if (button.classList.contains("current") && button.classList.contains("selection-button-big")) {
				picture.src = `https://picsum.photos/id/${randomID}/1600/800.jpg`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-mid")) {
				picture.src = `https://picsum.photos/id/${randomID}/1000/600.jpg`;
			} else if (button.classList.contains("current") && button.classList.contains("selection-button-small")) {
				picture.src = `https://picsum.photos/id/${randomID}/300/200.jpg`;
			}
		});
	}
});
