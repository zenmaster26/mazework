var score = 0
var lives = 3
var sword = false
document.getElementById("lives").innerHTML =  lives + " lives"
function wall(){
        var b = document.getElementById("exit").style.visibility = "hidden";
        
        var x = document.querySelectorAll(".wall");
        var i;  
        for(i = 0; i <  x.length; i++){
                x[i].style.visibility = "hidden";
                
            
            }
            lives -= 1;
            document.getElementById("lives").innerHTML = lives + " lives"
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

window.onload = () => {
    startSetTimeoutAnimation();
  };
  
  function startSetTimeoutAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 135;
    let rect = document.getElementById('rect0');
    let speedX = 1;
    let positionX = 0;
    document.getElementById('rect0').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
    }, refreshRate);
  }
  
  
