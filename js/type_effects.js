$(function() {
	var typing = {

		summary: function(){
			$(".summary-nouns").typed({
        strings: ["Interfaces.", "Identities.","Brands.", "Experiences.", "Flows.", "Graphics.", "Diagrams.", "Processes.", "Dreams.", "Cool Sh*t!"],
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