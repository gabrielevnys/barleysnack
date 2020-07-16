var header = document.getElementById('header');

window.onscroll = () => {
	if(window.pageYOffset > 80) {
		header.style.background = "rgba(255,255,255)";
		header.style.boxShadow = "0px 0px 25px rgba(0,0,0,0.25)";
	} else {
		header.style.background = "rgba(0,0,0,0)";
		header.style.boxShadow = "none";
	}
}

const menuSlide = () => {

	const hamburger = document.querySelector('.hamburger');
	const headerMenu = document.querySelector('.header-menu');
	const menus = document.querySelectorAll('.header-menu a');

	hamburger.addEventListener('click', () => {

		headerMenu.classList.toggle('header-menu-active');
		header.style.background = "rgba(255,255,255,0.9)";

		menus.forEach((menu, index) => {
			if (menu.style.animation) {
				menu.style.animation = '';
			} else {
				menu.style.animation = `headermenuFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});

		hamburger.classList.toggle('toggle-burger');

	}); 


}

menuSlide();