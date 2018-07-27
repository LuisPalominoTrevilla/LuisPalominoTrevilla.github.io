$(document).foundation()


// The next lines of code make the navigation var fixed when scrolling through the page
var firstTop = $('.side').offset().top;

$(window).scroll(function(){
 		var pTop = $('body').scrollTop();

    	if(pTop >= firstTop){
    	    $('.side').css({'position':'fixed'});
    	}else{
    	    $('.side').css({'position':'relative'});
    	}
});