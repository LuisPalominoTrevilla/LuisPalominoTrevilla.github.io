$(document).foundation()

var hide_temporal = $(".temp-hide");
var button_show = $(".unhide");

hide_temporal.hide();
var is_hidden = true;

$("img").animate({left: '0', opacity: 1}, 1500);


button_show.on('click', function(){
    button_show.css('backgrond-color', 'rgb(81, 81, 81)');
	if(is_hidden){
	    hide_temporal.show(800); //Show information
	    is_hidden = false;
	    button_show.html("Hide Interviews");
	}else{
	    hide_temporal.hide(800); //Hide information
	    is_hidden = true;
	    button_show.html("Show Interviews");
	}
	
});

	
function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
var playing=false;
function audio(url, ID){
    var sonido=new Audio(url);
    var flag=true;
    document.getElementById(ID).addEventListener("click", function(){
        if(!playing){
            if(flag){
                flag=false;
                sonido.play();
                playing=true;
            }
        }
        else{
            if (!flag){
                flag=true;
                sonido.pause();
                playing=false;
            }
        }
        
    });
}
audio("Alo1.mp3","alo1"); 
audio("Alo2.mp3","alo2");
audio("Alo3y4.mp3","alo3");
audio("Alo5.mp3","alo4");
audio("Alo6.mp3","alo5");
audio("Amaury1.mp3","amaury1");
audio("Amaury2.mp3","amaury2");
audio("Amaury3y4.mp3","amaury3");
audio("Amaury5.mp3","amaury4");
audio("Amaury6.mp3","amaury5");
audio("Experto1.mp3","expert1");
audio("Experto2.mp3","expert2");
audio("Experto3.mp3","expert3");

window.onload = function() { 
	$("#chartContainer").CanvasJSChart({ 
		title: { 
			text: "App",
			fontSize: 24
		}, 
		axisY: { 
			title: "Products in %" 
		}, 
		legend :{ 
			verticalAlign: "center", 
			horizontalAlign: "right" 
		}, 
		data: [ 
		{ 
			type: "pie", 
			showInLegend: true, 
			toolTipContent: "{label} <br/> {y} %", 
			indexLabel: "{y} %", 
			dataPoints: [ 
				{ label: "Games",  y: 43.4, legendText: "Games"}, 
				{ label: "Photography",    y: 8.3, legendText: "Photography"  }, 
				{ label: "Social Media",   y: 47.10,  legendText: "Social Media"}, 
				{ label: "Other",       y: 1.2,  legendText: "Others"}, 
				
			] 
		} 
		] 
	}); 
} 