var $overlay = $('<div id="overlay"></div>')
var $overlayContainer = $('<div id="img-wrapper"><a id="arrow-left"></a><div id="media-container"></div><a id="arrow-right"></a><a id="close-button"></a></div>')
var $caption = $('<p id="caption"></p>')
var $imageElement = $('<img id="overlay-img">');
var $videoElement = $('<iframe id="overlay-video" width="560" height="315" frameborder="0"></iframe>');
var $mediaSelected = $('');
var $mediaLocation = $('');
var $captionClicked = $('');
var $prevMediaDiv = $('');
var $nextMediaDiv = $('');


function nextVideo(getDiv){

		//get $mediaLocation
		$mediaLocation = getDiv.find("a").attr("src");
		
		//update the #overlay-video
		$("#overlay-video").attr("src", $mediaLocation);

		//update $mediaSelected
		$mediaSelected = getDiv.find("a");
}

function nextImage(getDiv){

		//update mediaLocation with the href from the next div anchor element
		$mediaLocation = getDiv.find("a").attr("href");

		//update the #overlay-img's src attribute
		$('#overlay-img').attr("src", $mediaLocation);
		
		//update mediaSelected to be current media
		$mediaSelected = getDiv.find("a");
}

//This function updates the appropriate elements when user is cycling images in lightbox
function cycleMedia(getDiv) {
	
	//store whether current media is video
	var isVideo = $mediaSelected.is('.video');
	//store whether next media is a video
	var nextIsVideo = getDiv.children('a').is('.video')

	//check whether current media is video and if next is video
	if(isVideo && nextIsVideo){
		
		nextVideo(getDiv);

		//check if current is vidoe and next is not a video
	} else if(isVideo && !nextIsVideo) {
		
		//replace $videoElement with $imageElement
		$($videoElement).replaceWith($imageElement);

		nextImage(getDiv);
		
	} else if(!isVideo && nextIsVideo) {

		//replace $imageElement with $videoElement
		$($imageElement).replaceWith($videoElement)

		nextVideo(getDiv);

	} else {

		nextImage(getDiv);
	}

		//update caption clicked to be alt attribute of next image
		$captionClicked = getDiv.find("img").attr("alt");

		//update caption of overlay
		$caption.text($captionClicked);
}

/*This function checks what image was selected by user, and shows appropriate arrows. 
Don't want to show left arrow if user clicked 1st image.*/
function arrowCheck(arrow, id) {
	if($mediaSelected.is(id)){
		$(arrow).hide();
	} else {
		$(arrow).show();
	}
}

//Add image to overlay
$overlay.append($overlayContainer);

//Add caption to overlay
$overlay.append($caption);

//Add overlay to body
$("body").append($overlay);

//Capture click event and link clicked
$(".container a").click(function(event){
	
	//prevent default behavior
	event.preventDefault();
	
	//store thumbnail anchor that was clicked for cycling through pics with arrows
	$mediaSelected = $(event.target).parent();
	
	//check if anchor is clicked thmubnail clicked is an image or video, if video then append videoElement image. If not a video, then append imageElement
	if($mediaSelected.is(".video")){
		$('#media-container').append($videoElement);

		//capture the video source
		$mediaLocation = $(this).attr("src");

		//update the overlay-video with the video location
		$("#overlay-video").attr("src", $mediaLocation)

	} else {
		//its an image, so append the $imageElement
		$('#media-container').append($imageElement);

		//capture the image location
		$mediaLocation = $(this).attr("href");

		//update the overlay-img with the image location
		$("#overlay-img").attr("src", $mediaLocation);
	}

	// if video, append videoElement

	//Capture the alt attribute of the element clicked
	$captionClicked = $(this).children().attr("alt");

	//update the overlay with the image location
	$caption.text($captionClicked);

	//show the overlay
	$overlay.show();

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last');


});

//When overlay is clicked we want to hide the overlay unless media is clicked

$overlay.click(function(event){
	
	//capture event target
	var clicked = $(event.target);
	
	//hide and stop video if click was not on overlay image wrapper
	if(!clicked.is('#overlay-img')){
		$overlay.hide();

		//if overlay was a video, this stops the video playback
		$("#overlay-video").attr("src", "");
	} 	
})

//When arrows are clicked, we want to cycle through the images backward or forward

$("#arrow-left").click(function(){

	if(!$mediaSelected.is("#first")) {
		
		//traverse up DOM to get next .pics div
		$prevMediaDiv = $mediaSelected.closest("div").prev();
		
		cycleMedia($prevMediaDiv);

	}

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last');
	
	return false;
})

$("#arrow-right").click(function(){
	
	if(!$mediaSelected.is("#last")) {
	
		//traverse down DOM to get next .pics div
		$nextMediaDiv = $mediaSelected.closest("div").next();
		
		cycleMedia($nextMediaDiv); 
	
	}

	arrowCheck('#arrow-left', '#first');
	arrowCheck('#arrow-right', '#last'); 
	
	return false;
})

















