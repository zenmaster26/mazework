var lives = 3
var loot= true;
function wall(){
        var b = document.getElementById("exit").style.visibility = "hidden";
        
        var x = document.querySelectorAll(".wall");
        var i;  
        for(i = 0; i <  x.length; i++){
                x[i].style.visibility = "hidden";
                
            
            }
            lives -= 1;
            console.log(lives)
            if(lives == 0){
                window.location.replace("pic2.html")
            }
}

function start(){
    
    document.getElementById("exit").style.visibility = "visible"
    
    var x = document.querySelectorAll(".wall");
    var i;  
    for(i = 0; i <  x.length; i++){
            x[i].style.visibility = "visible";
        }
    
}

