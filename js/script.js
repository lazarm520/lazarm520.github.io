$(document).ready(function(){
	$('.navbar a, footer a').click(function(event){

		event.preventDefault();
		var hash = $(this).attr('href');

		/*console.log($(hash).offset().top);*/

		$('html,body').animate({scrollTop: $(hash).offset().top}, 600, function(){window.location.hash=hash});
	});
})