var $overlay = $('<div id="overlay"> </div>')
var $image

//on click event show lightbox image
$(".pics a").click(function(event){
	//prevent default behavior
	event.preventDefault();
	//append overlay mask element to body
	$overlay.appendTo("body");
	//show linked image (href) centerd in body
		//get the href of linked image -NOTE FOR MENTOR, TRIED TO DEFINE THE VARIABLE HERE BUT DIDNT WORK, HAD TO DEFINE IN GLBAL SCOPE
		$image = $('<img class="overlay-pic" src="' + $(this).attr("href") + '">');
		//add the image to overlay element
		$image.appendTo("body");
});




