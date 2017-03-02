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
function audio(url, ID){
var sonido=new Audio(url);
var flag=true;
document.getElementById(ID).addEventListener("click", function(){
    if(flag){
    sonido.play();
    flag=false;
    }
    else{
    sonido.pause(); 
    flag=true;
    }});

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


window.onload = function() { 
	$("#appContainer").CanvasJSChart({ 
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
				{ label: "Games",  y: 43.4, legendText: "Games", color: "#f4bc42"}, 
				{ label: "Photography",    y: 8.3, legendText: "Photography", color: "#41f4a3"}, 
				{ label: "Social Media",   y: 47.10,  legendText: "Social Media", color: "#41d0f4"}, 
				{ label: "Other",       y: 1.2,  legendText: "Others", color: "#0a751f"}, 
				
			] 
		} 
		] 
	}); 
	
	$("#softwareContainer").CanvasJSChart({ 
		title: { 
			text: "Software",
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
				{ label: "School",  y: 55.3, legendText: "School", color: "#70254d"}, 
				{ label: "Business",  y: 15.2, legendText: "Business", color: "#d3db39"}, 
				{ label: "Design",    y: 8.3, legendText: "Design", color: "#db4e39"}, 
				{ label: "Utilities",   y: 15.1,  legendText: "Utilities", color: "#7369e0"}, 
				{ label: "Other",       y: 6.1,  legendText: "Others", color: "#074c59"}, 
				
			] 
		} 
		] 
	}); 
} 
