//LIGHT BOX OVERLAY

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

// Add image to overlay
$overlay.append($image);
// Add caption to overlay
// $overlay.append($caption);

// Add overlay
$('body').append($overlay);
	// an image
	// a caption

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

	
	//1.3 Get child's alt attribute and set caption
//2. Add overlay
	//2.1 an image
	//2.2 a caption
//3. When overlay is clicked
	//3.1 Hide the overlay