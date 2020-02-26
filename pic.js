
var loot= true;
function wall(){
    loot =false;
    if(loot == false)
    {
        window.location.replace("pic2.html");
    }
    document.getElementsByName("exit").style.backgroundColor = "white"
}
function start(){
    document.getElementsByClassName("wall").style.backgroundColor = "black"
    document.getElementsByClassName("exit").style.backgroundColor = "gold"
    
}

