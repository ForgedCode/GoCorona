// Nav Menu Toggle

const burgerMenu = document.getElementById("burgerMenu");
const navMenu = document.getElementById("navMenu");

burgerMenu.addEventListener("click", () => {
	if (burgerMenu.classList.contains("show")) {
		burgerMenu.classList.remove("show");
		navMenu.classList.remove("show");
	} else {
		burgerMenu.classList.add("show");
		navMenu.classList.add("show");
	}
});

const headerBg = () => {
	const header = document.getElementById("header");
	if (this.scrollY > 10) {
		header.classList.add("header-white");
	} else {
		header.classList.remove("header-white");
	}
};

window.addEventListener("scroll", headerBg);
