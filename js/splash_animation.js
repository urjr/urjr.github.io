$(function(){
	var splashAnim = {

		hoverEffect: function(text, animation, speed){
			$(text).on('mouseenter touchstart', function(){
				$('.greeting h1').stop(true, false).fadeTo(speed,0);
				$(animation).show(speed);
			})
			.on('mouseleave touchmove click', function(){
				$('.greeting h1').stop(true, false).delay(400).fadeTo(speed, 1);
				$(animation).hide(speed);		
			});
		},

		init: function(speed){
			splashAnim.hoverEffect('.splash-me','.animation-me', speed);
			splashAnim.hoverEffect('.splash-design','.animation-design', speed);
			splashAnim.hoverEffect('.splash-boston','.animation-boston', speed);
			splashAnim.hoverEffect('.splash-mail','.animation-mail', speed);
			splashAnim.hoverEffect('.splash-adhawk','.animation-adhawk', speed);
		},
	}

	splashAnim.init('fast');
});