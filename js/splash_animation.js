$(function(){
	var splashAnim = {

		hoverEffect: function(text, animation, speed){
			$(text).mouseenter(function(){
				if ($('.greeting h1').css('opacity') == 0) {
					$('.greeting h1').stop(true, false);
					$(animation).show(speed);
				} else {
					$('.greeting h1').fadeTo('fast',0);
					$(animation).show(speed);
				}
			})
			.mouseleave(function(){
				$('.greeting h1').delay(500).fadeTo('fast', 1);
				$(animation).hide(speed);		
			});
		},

		init: function(){
			splashAnim.hoverEffect('.splash-me','.animation-me', 'fast');
			splashAnim.hoverEffect('.splash-design','.animation-design', 'fast');
			splashAnim.hoverEffect('.splash-nyc','.animation-nyc', 'fast');
			splashAnim.hoverEffect('.splash-mail','.animation-mail', 'fast');
			splashAnim.hoverEffect('.splash-adhawk','.animation-adhawk', 'fast');
		},
	}

	splashAnim.init();
});