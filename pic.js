var score = 0
var lives = 3
var sword = false
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
            var c = document.querySelectorAll(".point");
        var i;  
        for(i = 0; i <  c.length; i++){
                c[i].style.visibility = "hidden";
                
            
            }
            var h = document.querySelectorAll(".hollow");
            var i;  
            for(i = 0; i <  h.length; i++){
                    h[i].style.visibility = "hidden";
                    
                
                }
                var s = document.querySelectorAll(".sword");
                var i;  
                for(i = 0; i <  s.length; i++){
                        s[i].style.visibility = "hidden";
                        
                    
                    }
}

function start(){
    
    document.getElementById("exit").style.visibility = "visible"
    
    var x = document.querySelectorAll(".wall");
    var i;  
    for(i = 0; i <  x.length; i++){
            x[i].style.visibility = "visible";
        }
        var c = document.querySelectorAll(".point");
        var i;  
        for(i = 0; i <  c.length; i++){
                c[i].style.visibility = "visible";
            }
            var h = document.querySelectorAll(".hollow");
            var i;  
            for(i = 0; i <  h.length; i++){
                    h[i].style.visibility = "visible";
                }
                var s = document.querySelectorAll(".sword");
                var i;  
                for(i = 0; i <  s.length; i++){
                        s[i].style.visibility = "visible";
                    }
    score = 0;
}

function addscore(){
    score += 100;
    console.log(score) 
}

function blade(){
    sword=true
    if(sword=true){
        var h = document.querySelectorAll(".hollow");
        var i;  
        for(i = 0; i <  h.length; i++){
                h[i].style.visibility = "hidden";
                
            
            }
    }
}



function win(){
    var b = document.getElementById("exit").style.visibility = "hidden";
        
    var x = document.querySelectorAll(".wall");
    var i;  
    for(i = 0; i <  x.length; i++){
            x[i].style.visibility = "hidden";
            
        
        }   
        var c = document.querySelectorAll(".point");
    var i;  
    for(i = 0; i <  c.length; i++){
            c[i].style.visibility = "hidden";
            
        
        }
        var h = document.querySelectorAll(".hollow");
        var i;  
        for(i = 0; i <  h.length; i++){
                h[i].style.visibility = "hidden";
                
            
            }
            var s = document.querySelectorAll(".sword");
            var i;  
            for(i = 0; i <  s.length; i++){
                    s[i].style.visibility = "hidden";
                    
                
                }
                var l = document.getElementById("start").style.visibility = "hidden";
            
    
    document.getElementById("winscreen").innerHTML = "Your score is: " + score
}


