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
