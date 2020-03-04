var score = 0
var lives = 3
var sword = false
document.getElementById("lives").innerHTML =  lives + " Lives Left"
function key1(){
    document.getElementById("keyred").style.visibility = "hidden"
    document.getElementById("doorred").style.visibility = "hidden"
}
function wall(){
        var b = document.getElementById("exit").style.visibility = "hidden";
        var r = document.getElementById("rect0").style.visibility = "hidden";
        var r1 = document.getElementById("rect1").style.visibility = "hidden";
        document.getElementById("keyred").style.visibility = "hidden";
        document.getElementById("doorred").style.visibility = "hidden"
        var x = document.querySelectorAll(".wall");
        document.getElementById("rect2").style.visibility = "hidden";
        document.getElementById("rect3").style.visibility = "hidden";
        document.getElementById("rect4").style.visibility = "hidden";
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
    document.getElementById("rect0").style.visibility = "visible"
    document.getElementById("rect1").style.visibility = "visible"
    document.getElementById("keyred").style.visibility = "visible"
    document.getElementById("doorred").style.visibility = "visible"
    document.getElementById("rect2").style.visibility = "visible"
    document.getElementById("rect3").style.visibility = "visible"
    document.getElementById("rect4").style.visibility = "visible"
    
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
    var r = document.getElementById("rect0").style.visibility = "hidden";
    var r1 = document.getElementById("rect1").style.visibility = "hidden";
    document.getElementById("rect2").style.visibility = "hidden";
    document.getElementById("rect3").style.visibility = "hidden";
    document.getElementById("rect4").style.visibility = "hidden";
    document.getElementById("keyred").style.visibility = "hidden";
    document.getElementById("doorred").style.visibility = "hidden"
        
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
    startSetTimeoutAnimation2();
    vObstacle1();
    vObstacle2();
    vObstacle3();
  };
  // VERTICAL ANIMATION
  function startSetTimeoutAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 100;
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
  // HORIZONTAL ANIMATION
    function startSetTimeoutAnimation2() {
    const refreshRate = 1000 / 60;
    const maxYPosition = 135;
    let rect = document.getElementById('rect1');
    let speedY = 0.7;
    let positionY = 0;
    document.getElementById('rect1').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionY = positionY + speedY;
      if (positionY > maxYPosition || positionY < 0) {
        speedY = speedY * (-1);
      }
      rect.style.top = positionY + 'px';
    }, refreshRate);
  }
  //LEVEL 1
  function vObstacle1() {
    const refreshRate = 1000 / 60;
    const maxY1Position = 75;
    let rect = document.getElementById('rect2');
    let speedY1 = 1;
    let positionY1 = 0;
    document.getElementById('rect2').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionY1 = positionY1 + speedY1;
      if (positionY1 > maxY1Position || positionY1 < 0) {
        speedY1 = speedY1 * (-1);
      }
      rect.style.top = positionY1 + 'px';
    }, refreshRate);
  }
  function vObstacle2() {
    const refreshRate = 1000 / 60;
    const maxY2Position = 38;
    let rect = document.getElementById('rect3');
    let speedY2 = 1;
    let positionY2 = 0;
    document.getElementById('rect3').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionY2 = positionY2 + speedY2;
      if (positionY2 > maxY2Position || positionY2 < 0) {
        speedY2 = speedY2 * (-1);
      }
      rect.style.top = positionY2 + 'px';
    }, refreshRate);
  }
  function vObstacle3() {
    const refreshRate = 1000 / 60;
    const maxY3Position = 67;
    let rect = document.getElementById('rect4');
    let speedY3 = 1;
    let positionY3 = 0;
    document.getElementById('rect4').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionY3 = positionY3 + speedY3;
      if (positionY3 > maxY3Position || positionY3 < 0) {
        speedY3 = speedY3 * (-1);
      }
      rect.style.top = positionY3 + 'px';
    }, refreshRate);
  }
  function vObstacle4() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 45;
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
  function hObstacle1() {
    const refreshRate = 1000 / 60;
    const maxYPosition = 105;
    let rect = document.getElementById('rect1');
    let speedY = 1;
    let positionY = 0;
    document.getElementById('rect1').onmouseover = function() {wall()};
  
    window.setInterval(() => {
      positionY = positionY + speedY;
      if (positionY > maxYPosition || positionY < 0) {
        speedY = speedY * (-1);
      }
      rect.style.top = positionY + 'px';
    }, refreshRate);
  }
  //LEVEL 2
  //LEVEL 3