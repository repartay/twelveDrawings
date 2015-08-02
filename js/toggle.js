
//Problem: text appears as default
//Solution: hide text until user action
	//written into HTML as default class	

//Problem: toggle does not trigger text reveal
//Solution: click event of toggle triggers event (text appearing)

//Problem: need to return to image only state
//Solution: click event that returns conditions to default
$(".toggler input").on("click", function(e) {
			//starting w/ image-mode state, switching to text-mode
			if ( $("body").hasClass("image-mode") ) {
					console.log("has image");
					$("body").removeClass("image-mode");
					$("body").addClass("text-mode");
			//starting w/ text-mode state, switching to image-mode
				} else if ( $("body").hasClass("text-mode") ) {
					console.log("has text");
					$("body").removeClass("text-mode");
					$("body").addClass("image-mode");
				}
			});


