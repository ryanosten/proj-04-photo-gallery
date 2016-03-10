var $overlay = $('<div id="overlay"></div>')
var $image = $('<div id="img-wrapper"><a id="arrow-left"></a><img id="overlay-img"><a id="arrow-right"></a><a id="close-button"></a></div>')
var $caption = $('<p id="caption"></p>')
var $thumbClicked = $('');

//Add image to overlay
$overlay.append($image);

//Add caption to overlay
$overlay.append($caption);

//Add overlay to body
$("body").append($overlay);

//Capture click event and link clicked
$(".container a").click(function(event){
	//prevent default behavior
	event.preventDefault();
	
	//store thumbnail anchor that was clicked for cycling through pics with arrows
	$thumbClicked = $(event.target)
	
	//Capture the image location
	var imageLocation = $(this).attr("href")

	//update the overlay-img with the image location
	$image.children("#overlay-img").attr("src", imageLocation);

	//Capture the alt attribute of the element clicked
	var captionClicked = $(this).children().attr("alt")

	//update the overlay with the image location
	$caption.text(captionClicked);

	//show the overlay
	$overlay.show();

});

//When overlay is clicked we want to hide the overlay - UPDATE THIS WITH AN Close button

$overlay.click(function(event){
	//capture event target
	var clicked = $(event.target);
	//hide if click was not on overlay image wrapper
	if(!clicked.is('#overlay-img')){
		$overlay.hide();
	} 	
})

//When arrow is clicked, we want to cycle through the images

$("#arrow-left").click(function(){
	//get the href of the previous image in dom tree
	var prevImage = $thumbClicked.prev();
	 
	$image.children("#img-overlay").attr("src", prevImage)
	console.log('left arrow was clicked');
	return false;
})





