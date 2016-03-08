$(function(){

	var menu = {
		isOpen: false,

		toggle: function(){
			$('.menu').toggleClass('disabled');
		},

		init: function(){
			var $openBtn = $('.bar-menu');
			var $closeBtn = $('.menu-close');
			if (menu.isOpen) {
				$closeBtn.on('click', function(){
					menu.toggle();
					menu.isOpen = !menu.isOpen;
					$closeBtn.off();
					menu.init();
				});
			} else {
				$openBtn.on('click', function(){
					menu.toggle();
					menu.isOpen = !menu.isOpen;
					$openBtn.off();
					menu.init();
				});
			};
		},
	};

	menu.init();

});