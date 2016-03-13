var $overlay = $('<div id="overlay"></div>')
var $image = $('<div id="img-wrapper"><a id="arrow-left"></a><img id="overlay-img"><a id="arrow-right"></a><a id="close-button"></a></div>')
var $caption = $('<p id="caption"></p>')
var $imageSelected = $('');
var $imageLocation = $('');
var $captionClicked = $('');
var $prevImageDiv = $('');
var $nextImageDiv = $('');

//This function updates the appropriate elements when user is cycling images in lightbox
function cycleImage(getDiv) {
	
	//update imageLocation with the href from the next div anchor element  
	$imageLocation = getDiv.find("a").attr("href");

	//update the #overlay-img's src attribute
	$image.find('#overlay-img').attr("src", $imageLocation);

	//update caption clicked to be alt attribute of next image
	$captionClicked = getDiv.find("img").attr("alt");

	//update caption of overlay
	$caption.text($captionClicked);
	
	//update imageSelected to be current image
	$imageSelected = getDiv.find("a");
	
}

function arrowCheck(arrow, id) {
	if($imageSelected.is(id)){
		$(arrow).hide();
	} else {
		$(arrow).show();
	}
}

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
	$imageSelected = $(event.target).parent();
	
	//capture the image location
	$imageLocation = $(this).attr("href");

	//update the overlay-img with the image location
	$image.children("#overlay-img").attr("src", $imageLocation);

	//Capture the alt attribute of the element clicked
	$captionClicked = $(this).children().attr("alt");

	//update the overlay with the image location
	$caption.text($captionClicked);

	//show the overlay
	$overlay.show();

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last'); 

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

//When arrows are clicked, we want to cycle through the images backward or forward

$("#arrow-left").click(function(){

	if(!$imageSelected.is("#first")) {
		
		//traverse up DOM to get next .pics div
		$prevImageDiv = $imageSelected.closest("div").prev();
		
		cycleImage($prevImageDiv);

	}

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last');
	
	return false;
})

$("#arrow-right").click(function(){
	
	if(!$imageSelected.is("#last")) {
	
	//traverse down DOM to get next .pics div
	$nextImageDiv = $imageSelected.closest("div").next();
	
	cycleImage($nextImageDiv); 
	
	}

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last'); 
	
	return false;
})












