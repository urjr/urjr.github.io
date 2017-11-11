$(function(){

	var menu = {
		isOpen: false,

		openBtn: $('.hamburger'),

		closeBtn: $('.menu-close'),

		toggle: function(){
			menu.closeBtn.on('click', function(){
				$('.menu').toggleClass('disabled');
				$('body').css('overflow', 'auto');
				menu.isOpen = !menu.isOpen;
			});
			menu.openBtn.on('click', function(){
				$('.menu').toggleClass('disabled');
				$('body').css('overflow', 'hidden');
				menu.isOpen = !menu.isOpen;
			});
		},

		splashColorFlip: function(){
			$('#summary').waypoint(function(direction) {
			  if (direction == 'down') {
			  	$('.hamburger .line').css('background-color', '#3498db');
			  } else {
			  	$('.hamburger .line').css('background-color', '#fff');
			  }
			}, {
				offset: '30px',
			});

			$('#notarize').waypoint(function(direction) {
			  if (direction == 'down') {
			  	$('.hamburger .line').css('background-color', '#fff');
			  } else {
			  	$('.hamburger .line').css('background-color', '#3498db');
			  }
			}, {
				offset: '30px',
			});
		},

		init: function(){
			menu.toggle();
			menu.splashColorFlip();
		},
	};

	menu.init();

});