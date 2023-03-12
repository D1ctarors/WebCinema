
function initSliders() {
	if (document.querySelector(".swiper")) new Swiper(".swiper", {
		centeredSlides: true,
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 24,
		speed: 2000,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 3,
		preloadImages: true,
		parallax: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			530: {
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
			},
			992: {
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

window.addEventListener("load", (function (e) {
	initSliders();
}));