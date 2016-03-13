var $val = $('');
var $altText = $('');
var count = 0;

$('#search').keyup(function() {
	$val = $(this).val().toLowerCase();
	count = $val.length

	$(".container img").hide();

	$(".container img").each(function(){
		$altText = $(this).attr("alt").toLowerCase();

		if($altText.substring(0, count) == $val){
			$(this).show();
		} 
	})
})


