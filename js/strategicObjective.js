$(document).foundation()

var firstTop = $('#first').offset().top - window.innerHeight;
var secondTop = $('#second').offset().top - window.innerHeight;
var thirdTop = $('#third').offset().top - window.innerHeight;

$(window).on('resize', function(){
    var firstTop = $('#first').offset().top - window.innerHeight;
    var secondTop = $('#second').offset().top - window.innerHeight;
    var thirdTop = $('#third').offset().top - window.innerHeight;
});

$(window).scroll(function(){
    
 		var pTop = $('body').scrollTop();
    	console.log( pTop + ' - ' + secondTop );
    	console.log( pTop + ' - ' + firstTop );
    	if(pTop > thirdTop){
    	    $("body").css('background-image', 'url('+"images/stand.jpg"+')');
    	}else if(pTop > secondTop ){
 		    $("body").css('background-image', 'url('+"images/lib.jpg"+')');
 		}else if( pTop > firstTop ){
     		$("body").css('background-image', 'url('+"images/library.jpg"+')');
 		}else{
 		    $("body").css('background-image', 'url('+"images/book.jpg"+')');
 		}
});