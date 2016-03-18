var $value = $('');
var $altText = $('');
var count = 0;


//When user enters text in the input field, check the alt text on imgs and only show imgs that match input text
$('.search').keyup(function() {
	
	//store the input text and store count of number of characters in input
	$value = $(this).val().toLowerCase();
	count = $value.length
	
	//hide all images
	$(".container img").addClass("hide");
	
	//only show images where $value matches the alt attribute value of img
	$(".container img").each(function(){
		
		//get the alt value and store it 
		$altText = $(this).attr("alt").toLowerCase();

		/*check if the alt text matches the search input value. Must use substring method 
		to check for exact match at beginning of alt text, otherwise module will look for $value at any position in $altText*/
		if($altText.substring(0, count) == $value){
			$(this).removeClass("hide");
		} 
	})
})

