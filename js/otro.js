
document.getElementById("0").style.display = "inline";
document.getElementsByClassName("tasks")[0].addEventListener("click",but)
document.getElementsByClassName("steps1")[0].addEventListener("click",but)
document.getElementsByClassName("steps2")[0].addEventListener("click",but)
document.getElementsByClassName("steps3")[0].addEventListener("click",but)

function but(e){
    console.log(this.className);
    var f;
    if(this.className=="button tasks"){
        f="0";
    }
    else if(this.className=="button steps1"){
        f="1";
    }
    else if(this.className=="button steps2"){
        f="2";
    }
    else if(this.className=="button steps3"){
        f="3";
    }
    for(var i=0;i<4;i++){
    document.getElementsByClassName("esconder")[i].style.display = "none";
    }
    document.getElementById(f).style.display = "initial";
    
}

