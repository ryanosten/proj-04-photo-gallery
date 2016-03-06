var $overlay = $('<div id="overlay"></div>')
var $image = $('<img id="overlay-img">')
var $caption = $('<p id="caption"></p>')

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
	
	//Capture the image location
	var imageLocation = $(this).attr("href")

	//update the overlay-img with the image location
	$image.attr("src", imageLocation);

	//Capture the alt attribute of the element clicked
	var captionClicked = $(this).children().attr("alt")

	//update the overlay with the image location
	$caption.text(captionClicked);

	//show the overlay
	$overlay.show();

});

//When overlay is clicked we want to hide the overlay - UPDATE THIS WITH AN Close button

$("#overlay").click(function(){
	$(this).hide();
})




