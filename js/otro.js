var flag=true;
document.getElementById("1").style.display = "inline";
document.getElementsByClassName("float-right")[0].addEventListener("click",ven)
document.getElementsByClassName("float-left")[0].addEventListener("click",ven)

function ven(){
    if (flag){
        show("2","1");
        flag=false;
    }
    else{
        show("1","2");
        flag=true;
    }
    
}

function show(ID,id){
    document.getElementById(ID).style.display = "none";
    document.getElementById(id).style.display = "initial";
}