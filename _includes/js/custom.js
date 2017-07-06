
/* Custom Javascript */

$(document).ready(function() {
	AOS.init();
	
	$('#open-menu').click(function() {
		$('#m-nav').toggleClass("w3-show");
	});
});

$(document).ready(function() {  
	$("html").niceScroll({
		cursorwidth: "8px",
		cursorminheight: "140",
		horizrailenabled: false
	});
});
