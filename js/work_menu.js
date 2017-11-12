$(function(){

	var workMenu = {
		isOpen: false,

		button: $('#work-menu-btn'),
		icon: $('#work-menu-btn span'),
		backdrop: $('#work-menu-backdrop'),
		list: $('#work-menu-list'),

		toggle: function(){
			if (workMenu.isOpen) {
				workMenu.backdrop.fadeOut(200);
				workMenu.list.fadeOut(200);
				workMenu.icon.toggleClass('glyphicon-remove');
				workMenu.icon.toggleClass('glyphicon-chevron-down');
				$('body').css('overflow', 'auto');
			} else {
				workMenu.backdrop.fadeIn(200);
				workMenu.list.css('opacity', '1');
				workMenu.list.fadeIn(200);
				workMenu.icon.toggleClass('glyphicon-chevron-down');
				workMenu.icon.toggleClass('glyphicon-remove');
				$('body').css('overflow', 'hidden');
			}
			workMenu.isOpen = !workMenu.isOpen;
		},

		events: function (){
			workMenu.list.hide();
			workMenu.button.on('click', function(){
				workMenu.toggle();
			});
			workMenu.backdrop.on('click', function(){
				workMenu.toggle();
			});
		},

		init: function(){
			workMenu.events();
		},
	};

	workMenu.init();

});