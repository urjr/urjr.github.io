$(function(){
	var splashAnim = {

		hoverEffect: function(text, animation, speed){
			$(text).mouseenter(function(){
				if ($('.greeting h1').css('opacity') == 0) {
					$('.greeting h1').stop(true, false);
					$(animation).show(speed);
				} else {
					$('.greeting h1').fadeTo(speed,0);
					$(animation).show(speed);
				}
			})
			.mouseleave(function(){
				$('.greeting h1').delay(400).fadeTo(speed, 1);
				$(animation).hide(speed);		
			});
		},

		init: function(speed){
			splashAnim.hoverEffect('.splash-me','.animation-me', speed);
			splashAnim.hoverEffect('.splash-design','.animation-design', speed);
			splashAnim.hoverEffect('.splash-nyc','.animation-nyc', speed);
			splashAnim.hoverEffect('.splash-mail','.animation-mail', speed);
			splashAnim.hoverEffect('.splash-adhawk','.animation-adhawk', speed);
		},
	}

	splashAnim.init('fast');
});