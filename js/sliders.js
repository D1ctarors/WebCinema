function initSlidersTopFilm() {
	if (document.querySelector(".top-films-slider")) new Swiper(".top-films-slider", {
		centeredSlides: true,
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 24,
		speed: 1000,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 3,
		preloadImages: true,
		parallax: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			530: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 1,
				// navigation: false,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			1268: {
				spaceBetween: 24
			},
			1550: {
				spaceBetween: 24
			}
		},
		on: {}
	});


}
function initSlidersGenres() {
	if (document.querySelector(".genres-slider")) new Swiper(".genres-slider", {
		slidesPerView: 3,
		spaceBetween: 5,
		// freeMode: true,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
	});
}
window.addEventListener("load", (function (e) {
	initSlidersTopFilm();
	initSlidersGenres();
}));