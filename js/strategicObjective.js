$(document).foundation()

var firstTop = $('#first').offset().top - window.innerHeight;
var secondTop = $('#second').offset().top - window.innerHeight;
var thirdTop = $('#third').offset().top - window.innerHeight;

var firstImage = $('#first-image').offset().top - window.innerHeight;
var secondImage = $('#second-image').offset().top - window.innerHeight;
var thirdImage = $('#third-image').offset().top - window.innerHeight;
var firstTitle = $('#first-title').offset().top - window.innerHeight;
var secondTitle = $('#second-title').offset().top - window.innerHeight;
var thirdTitle = $('#third-title').offset().top - window.innerHeight;

$(window).scroll(function(){
    
 		var pTop = $('body').scrollTop();
    	if(pTop > thirdTop){
    	    $("body").css('background-image', 'url('+"images/stand.jpg"+')');
    	}else if(pTop > secondTop ){
 		    $("body").css('background-image', 'url('+"images/lib.jpg"+')');
 		}else if( pTop > firstTop ){
     		$("body").css('background-image', 'url('+"images/library.jpg"+')');
 		}else{
 		    $("body").css('background-image', 'url('+"images/book.jpg"+')');
 		}
 		
 		if(pTop > firstImage){
 		    $('#first-image').animate({left: '970', opacity: 1}, 1500);
 		}
 		if(pTop > secondImage){
 		    $('#second-image').animate({left: '1500', opacity: 1}, 1500);
 		}
 		if(pTop > thirdImage){
 		    $('#third-image').animate({left: '1300', opacity: 1}, 1500);
 		}
 		if(pTop > firstTitle){
 		    $('#first-title').animate({opacity: 1}, 1500);
 		}
 		if(pTop > secondTitle){
 		    $('#second-title').animate({opacity: 1}, 1500);
 		}
 		if(pTop > thirdTitle){
 		    $('#third-title').animate({opacity: 1}, 1500);
 		}
});