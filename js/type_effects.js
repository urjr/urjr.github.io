$(function() {
	var typing = {

		summary: function(){
			$(".summary-nouns").typed({
        strings: ["interfaces.", "identities.","brands.", "experiences.", "dreams.", "cool shit!"],
        typeSpeed: 0,
        loop: true,
	    });
		},

    init: function(){
      typing.summary();
    },

	};

  typing.init();
});