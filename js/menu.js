$(function(){
	$('.bar-menu').on('click', function(){
		$('.menu').toggleClass('disabled');
	});

	$('.menu-close').on('click', function(){
		$('.menu').toggleClass('disabled');
	});
});