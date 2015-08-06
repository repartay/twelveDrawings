var cardWidth,
	carouselPos;

var numCards = 12,
	carouselWrap = $('.carouselWrapper'),
	carousel = $('.carousel'),
	leftBtn = $('.left-btn'),
	rightBtn = $('.right-btn');


console.log(cardWidth);

// Make function for event .resize on $(window) {
	var cardWidth = $('.card').outerHeight();

//}

//apply attr('data-position', '1') to each carousel

//event: leftBtn.click {
	//this button parent .carousel {
		//var oldPos = .carousel.attr('data-position');
		//var currentPos = oldPos - 1;
		//set data-attribute data-position = currentPos;
		//fire function setPos(carousel);
	//}
//}

//event: rightBtn.click {
	//this button parent .carousel {
		//var oldPos = .carousel.attr('data-position');
		//var currentPos = oldPos + 1;
		//set data-attribute data-position = currentPos;
		//fire function setPos(carousel);
	//}
//}

// var setPos = function(carousel) {

//}

//Click function

$('body').on('click', function() {
	var currentPos = $('.carousel').attr('data-position');
	var currentPosNum = parseInt( currentPos, 10 ); 
	var	newPos = currentPosNum + 1;

		console.log(newPos);

	$('.carousel').attr('data-position', newPos);
});





			<!--carousel indicators MAY NOT USE
					
				<ol class="carousel-indicators">
					<li class="active" data-target="#carousel-one" data-slide-to="0"></li>
					<li data-target="#carousel-one" data-slide-to="1"></li>
					<li data-target="#carousel-one" data-slide-to="2"></li>
					<li data-target="#carousel-one" data-slide-to="3"></li>
					<li data-target="#carousel-one" data-slide-to="12"></li>
				</ol>

				-->



