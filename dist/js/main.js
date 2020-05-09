const btnGet = document.querySelector(".get-picture-button");
const btnBig = document.querySelector(".selection-button-big");
const btnMid = document.querySelector(".selection-button-mid");
const btnSmall = document.querySelector(".selection-button-small");
const picture = document.querySelector("img");

const btnBigClick = btnBig.addEventListener("click", (e) => {
	e.preventDefault();
	return displayBigPicture();
});

function displayBigPicture() {
	picture.src = "https://picsum.photos/1600/800";
}

const btnMidClick = btnMid.addEventListener("click", (e) => {
	e.preventDefault();
	return displayMidPicture();
});

function displayMidPicture() {
	picture.src = "https://picsum.photos/1000/600";
}

const btnSmallClick = btnSmall.addEventListener("click", (e) => {
	e.preventDefault();
	return displaySmallPicture();
});

function displaySmallPicture() {
	picture.src = "https://picsum.photos/300/200";
}

btnGet.addEventListener("click", () => {
	const currentSize = picture.src.slice(22);
	console.log(currentSize);
	window.open("https://picsum.photos/seed/" + currentSize + ".jpg");
});

// https://picsum.photos/
