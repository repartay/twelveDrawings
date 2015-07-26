//LIGHT BOX OVERLAY

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// Add image to overlay
$overlay.append($image);

// Add overlay
$('body').append($overlay);
	

// Capture the click event on a link to an image-mode
$("#carousel-one a").on("click", function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// Update overlay with the image link
	$image.attr("src", imageLocation);
	// show the overlay
	$overlay.show();
});


$overlay.on("click", function(){
	$overlay.hide();
});

$("#carousel-two a").on("click", function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.show();
});


$overlay.on("click", function(){
	$overlay.hide();
});
	
	