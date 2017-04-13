$(document).foundation()


// The next lines of code make the navigation var fixed when scrolling through the page
var firstTop = $('.nav-container').offset().top;


$(window).scroll(function(){
 		var pTop = $('body').scrollTop();

    	if(pTop >= firstTop){
    	    $('.nav-container').css({'position':'fixed', 'width':'100%', 'top':0});
    	}else{
    	    $('.nav-container').css({'position':'relative', 'width':'100%'});
    	}
});

var vm = new Vue({
	el: "#title",
	data: {
	    username: "Luis",
	    lastName: "Palomino",
	    mail: "a01228574@itesm.mx"
	}
});

$('.logout').on('click', function(){
	window.location.href="index.html";
});