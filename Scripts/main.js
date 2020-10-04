(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		new WOW().init();
		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true,
			alwaysShowNavOnTouchDevices: true
		})
	});


	// jQuery loading function starts          
	// jQuery(window).load(function () {

	// });
	$('[data-toggle="datepicker"]').datepicker();
}(jQuery));


var rellax = new Rellax('.rellax');

var mySwiper = new Swiper('.swiper-container-contact', {
	speed: 400,
	spaceBetween: 15,
	slidesPerView: 3,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			spaceBetween: 1
		},
		479: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 15
		}
	}
});