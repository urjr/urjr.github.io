$(function(){
	var landingFooter = {
		zUpdate: function(){
			var win = $(window);
			var footer = $('.landing-footer');
			var trigger = footer.height();
    		win.scroll(function(e){
	        	var scrollTop = win.scrollTop();
		        if(scrollTop >= trigger){
		 			footer.css({'z-index': '300'});
		        }
		        else {
		            footer.css({'z-index': ''});
		        }
		    });
		},

		init: function(){
			landingFooter.zUpdate();
		},
	};

	landingFooter.init();
});