//При кліці на кноку добавляє новий клас "menu__list--active" JS-JQUERY
$(function () {
	$(".menu__btn").on("click", function () {
		$(".menu__list").toggleClass("menu__list--active");
	});
});

$(function () {
	$(".carsharing__slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots:false
				}
			}
		]
	});
});

$(".reviews__slider").slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 841,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
