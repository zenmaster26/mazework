var score = 0
var lives = 3
var sword = false

document.getElementById("lives").innerHTML = "<img id='life' src=images/HeartBeating.gif> <img id='life' src=images/HeartBeating.gif> <img id='life' src=images/HeartBeating.gif>"
function key1(){
    document.getElementById("keyred").style.visibility = "hidden"
    document.getElementById("doorred").style.visibility = "hidden"
}
function l2wall(){
  document.getElementById("rect7").style.visibility = "hidden"
  document.getElementById("rect8").style.visibility = "hidden"
  document.getElementById("rect9").style.visibility = "hidden"
  document.getElementById("rect10").style.visibility = "hidden"
}
function l1wall(){
  document.getElementById("rect5").style.visibility = "hidden";
  document.getElementById("rect6").style.visibility = "hidden";
}
function l3wall(){
  document.getElementById("rect0").style.visibility = "hidden";
  document.getElementById("rect1").style.visibility = "hidden";
  document.getElementById("rect2").style.visibility = "hidden";
  document.getElementById("rect3").style.visibility = "hidden";
  document.getElementById("rect4").style.visibility = "hidden";
}
function wall(){
        document.getElementById("exit").style.visibility = "hidden"
        
       


        document.getElementById("keyred").style.visibility = "hidden";
        document.getElementById("doorred").style.visibility = "hidden";
        
        var x = document.querySelectorAll(".wall");
        var i;  
        for(i = 0; i <  x.length; i++){
                x[i].style.visibility = "hidden";
                
            
            }
            lives -= 1;
            
            if(lives == 3){
                document.getElementById("lives").innerHTML = "<img id='life' src=images/HeartBeating.gif> <img id='life' src=images/HeartBeating.gif> <img id='life' src=images/HeartBeating.gif>"
            }
            else if(lives == 2){
              document.getElementById("lives").innerHTML = "<img id='life' src=images/HeartBeating.gif> <img id='life' src=images/HeartBeating.gif>"
            }
            else if(lives == 1){
              document.getElementById("lives").innerHTML = "<img id='life' src=images/HeartBeating.gif>"
            }
            else{
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
function l1start(){
  document.getElementById("rect5").style.visibility = "visible"
  document.getElementById("rect6").style.visibility = "visible"
}
function l2start(){
  document.getElementById("rect7").style.visibility = "visible"
  document.getElementById("rect8").style.visibility = "visible"
  document.getElementById("rect9").style.visibility = "visible"
  document.getElementById("rect10").style.visibility = "visible"
}
function l3start(){
  document.getElementById("rect0").style.visibility = "visible"
  document.getElementById("rect1").style.visibility = "visible"
  document.getElementById("rect2").style.visibility = "visible"
  document.getElementById("rect3").style.visibility = "visible"
  document.getElementById("rect4").style.visibility = "visible"
}
function start(){
    
    document.getElementById("exit").style.visibility = "visible"
    document.getElementById("keyred").style.visibility = "visible"
    document.getElementById("doorred").style.visibility = "visible"
    
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
function l2win(){
  document.getElementById("rect7").style.visibility = "hidden"
  document.getElementById("rect8").style.visibility = "hidden"
  document.getElementById("rect9").style.visibility = "hidden"
  document.getElementById("rect10").style.visibility = "hidden"
}
function l1win(){
  document.getElementById("rect5").style.visibility = "hidden"
  document.getElementById("rect6").style.visibility = "hidden"
}
function l3win(){
  var r = document.getElementById("rect0").style.visibility = "hidden";
  var r1 = document.getElementById("rect1").style.visibility = "hidden";
  document.getElementById("rect2").style.visibility = "hidden";
  document.getElementById("rect3").style.visibility = "hidden";
  document.getElementById("rect4").style.visibility = "hidden";
}
function win(){
    var b = document.getElementById("exit").style.visibility = "hidden";
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

  //LEVEL 2
  function level2(){
    window.onload = () => {
      l2enemya();
      l2enemyb();
      l2enemyc();
      l2enemyd();
    }
    function l2enemya() {
      const refreshRate = 1000 / 60;
      const maxY7Position = 50;
      let rect = document.getElementById('rect7');
      let speedY7 = 1;
      let positionY7 = 0;
      document.getElementById('rect7').onmouseover = function() {wall(); l2wall()};
    
      window.setInterval(() => {
        positionY7 = positionY7 + speedY7;
        if (positionY7 > maxY7Position || positionY7 < 0) {
          speedY7 = speedY7 * (-1);
        }
        rect.style.bottom = positionY7 + 'px';
      }, refreshRate);
    }
    function l2enemyb() {
      const refreshRate = 1000 / 60;
      const maxX7Position = 130;
      let rect = document.getElementById('rect8');
      let speedX7 = 1;
      let positionX7 = 0;
      document.getElementById('rect8').onmouseover = function() {wall(); l2wall()};
    
      window.setInterval(() => {
        positionX7 = positionX7 + speedX7;
        if (positionX7 > maxX7Position || positionX7 < 0) {
          speedX7 = speedX7 * (-1);
        }
        rect.style.left = positionX7 + 'px';
      }, refreshRate);
    }
    function l2enemyc() {
      const refreshRate = 1000 / 60;
      const maxY8Position = 45;
      let rect = document.getElementById('rect9');
      let speedY8 = 1;
      let positionY8 = 0;
      document.getElementById('rect9').onmouseover = function() {wall(); l2wall()};
    
      window.setInterval(() => {
        positionY8 = positionY8 + speedY8;
        if (positionY8 > maxY8Position || positionY8 < 0) {
          speedY8 = speedY8 * (-1);
        }
        rect.style.top = positionY8 + 'px';
      }, refreshRate);
    }
    function l2enemyd() {
      const refreshRate = 1000 / 60;
      const maxY9Position = 45;
      let rect = document.getElementById('rect10');
      let speedY9 = 1;
      let positionY9 = 0;
      document.getElementById('rect10').onmouseover = function() {wall(); l2wall()};
    
      window.setInterval(() => {
        positionY9 = positionY9 + speedY9;
        if (positionY9 > maxY9Position || positionY9 < 0) {
          speedY9 = speedY9 * (-1);
        }
        rect.style.top = positionY9 + 'px';
      }, refreshRate);
    }
  }
  //LEVEL 3
  function level3(){
    level3 = true
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
        const maxXPosition = 130;
        let rect = document.getElementById('rect0');
        let speedX = 1;
        let positionX = 0;
        document.getElementById('rect0').onmouseover = function() {wall();l3wall()};
      
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
        const maxYPosition = 195;
        let rect = document.getElementById('rect1');
        let speedY = 0.7;
        let positionY = 0;
        document.getElementById('rect1').onmouseover = function() {wall();l3wall()};
      
        window.setInterval(() => {
          positionY = positionY + speedY;
          if (positionY > maxYPosition || positionY < 0) {
            speedY = speedY * (-1);
          }
          rect.style.top = positionY + 'px';
        }, refreshRate);
      }

      function vObstacle1() {
        const refreshRate = 1000 / 60;
        const maxY1Position = 95;
        let rect = document.getElementById('rect2');
        let speedY1 = 1;
        let positionY1 = 0;
        document.getElementById('rect2').onmouseover = function() {wall();l3wall()};
      
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
        const maxY2Position = 45;
        let rect = document.getElementById('rect3');
        let speedY2 = 1;
        let positionY2 = 0;
        document.getElementById('rect3').onmouseover = function() {wall();l3wall()};
      
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
        const maxY3Position = 100;
        let rect = document.getElementById('rect4');
        let speedY3 = 1;
        let positionY3 = 0;
        document.getElementById('rect4').onmouseover = function() {wall(); l3wall()};
      
        window.setInterval(() => {
          positionY3 = positionY3 + speedY3;
          if (positionY3 > maxY3Position || positionY3 < 0) {
            speedY3 = speedY3 * (-1);
          }
          rect.style.top = positionY3 + 'px';
        }, refreshRate);
      }
    
      }
            //LEVEL 1
            function level1(){
              window.onload = () => {
                L1enemyA();
                L1enemyB();
              }
              function L1enemyA() {
                const refreshRate = 1000 / 60;
                const maxY5Position = 200;
                let rect = document.getElementById('rect5');
                let speedY5 = 1;
                let positionY5 = 0;
                document.getElementById('rect5').onmouseover = function() {wall(); l1wall()};
              
                window.setInterval(() => {
                  positionY5 = positionY5 + speedY5;
                  if (positionY5 > maxY5Position || positionY5 < 0) {
                    speedY5 = speedY5 * (-1);
                  }
                  rect.style.top = positionY5 + 'px';
                }, refreshRate);
              }
              function L1enemyB() {
                const refreshRate = 1000 / 60;
                const maxY6Position = 95;
                let rect = document.getElementById('rect6');
                let speedY6 = 1;
                let positionY6 = 0;
                document.getElementById('rect6').onmouseover = function() {wall(); l1wall()};
              
                window.setInterval(() => {
                  positionY6 = positionY6 + speedY6;
                  if (positionY6 > maxY6Position || positionY6 < 0) {
                    speedY6 = speedY6 * (-1);
                  }
                  rect.style.top = positionY6 + 'px';
                }, refreshRate);
              }
            }