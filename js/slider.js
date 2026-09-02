$(document).ready(function () {
	// mainvisual slider 
	$('.slider-for').slick({
	  asNavFor: $('.slider-nav'),
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: false,
	  arrows: false,
	  infinite: true,
	  cssEase: 'linear',
	  autoplaySpeed: 2000,
	  variableWidth: false,
	  dots: false,
	  responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1
			}
		}
	  ]
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: $('.slider-for'),
	  dots: false,
	  // variableWidth: true,
	  focusOnSelect: true,
	  infinite: false,
	  arrows: false,
	  responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1
			}
		}
	  ]
	});
	 
	

	// for menu-details
	$('.menu-details-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<span class="slick-prev"><img src="img/menu_detail/ico_slick_left_arrow.png" alt=""></span>',
		nextArrow: '<span class="slick-next"><img src="img/menu_detail/ico_slick_right_arrow.png" alt=""></span>',
	});
	
	
});