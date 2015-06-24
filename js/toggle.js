//Problem: text appears as default
//Solution: hide text until user action
	//written into HTML as default class	
	$('.text').hide();

//Problem: toggle does not trigger text reveal
//Solution: click event of toggle triggers event (text appearing)

//Problem: need to return to image only state
//Solution: click event that returns conditions to default

$(".toggler").on("click"(function () {
	if ($("body").hasClass("image-mode")) {
		$(".body").removeClass("image-mode").addClass
		("text-mode")
		} 
	else if ($("body").hasClass("text-mode")){
		$("body").removeClass("text- mode").addClass("image-mode")
		} 
	}
));

