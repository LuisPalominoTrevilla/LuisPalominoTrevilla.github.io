$(document).foundation()


// The next lines of code make the navigation var fixed when scrolling through the page
var firstTop = $('.nav-container').offset().top + 1;


$(window).scroll(function(){
 		var pTop = $('body').scrollTop();

    	if(pTop >= firstTop){
    	    $('.nav-container').css({'position':'fixed', 'width':'100%', 'top':0});
    	    $('.top').css({'margin-top': $('.nav-container').height() + 'px'});
    	}else{
    	    $('.nav-container').css({'position':'relative', 'width':'100%'});
    	    $('.top').css({'margin-top':0});
    	}
});