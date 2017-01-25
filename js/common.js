$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	//Filterizd
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var filterizd = $('.filtr-container').filterizr({
	});


	$('li').click(function(e) {
	    e.preventDefault();
	    $('li').removeClass('active');
	    $('li[data-filter = ' + $(this).data('filter') + ']').addClass('active');
	});

	//Toggle searchbar
    $('.search').click(function() {
    	$('.search-row').toggle();
    });	

    //Slide navigation
    $('.search').click(function() {
    	$('.nav').toggleClass('activated');
    });

    //Scroll to
    $("li, .more-work").click(function() {
    $('html, body').animate({
        scrollTop: $(".slide-to").offset().top
    }, 500);
	});

	function fadeIn(){
		$('.main-title, .more-work').delay(100).fadeIn(1000);
	}
	$(document).ready(fadeIn);

	$('.more-work').hover(
       function(){ $(this).addClass('animated tada') },
       function(){ $(this).removeClass('animated tada') }
	)

    $('.filtr-container').on('click', function(){
    $('.filtr-container').toggleClass('open');

})

});
