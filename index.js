function start(){
  
let egg1 = document.getElementById("egg1");
let egg2 = document.getElementById("egg2");
let egg3 = document.getElementById("egg3");

while (egg1.firstChild) { 
 egg1.firstChild.remove(); }

while (egg2.firstChild) { 
 egg2.firstChild.remove(); }

while (egg3.firstChild) { 
 egg3.firstChild.remove(); }

egg1.style.backgroundColor = "rgb(255, 255, 204)";
egg2.style.backgroundColor = "rgb(255, 255, 204)";
egg3.style.backgroundColor = "rgb(255, 255, 204)";
  


function addAnimation1(){
egg1.style.animation = "move1 0.5s 3 forwards";
egg2.style.animation = "move2 0.5s 3 forwards";
egg3.style.animation = "move6 0.5s 3 forwards";
 }
  
function addAnimation2(){
egg1.style.animation = "move4 0.5s 3 forwards";
egg2.style.animation = "move3 0.5s 3 forwards";
egg3.style.animation = "move5 0.5s 3 forwards";
  }
   
 function addAnimation3(){
egg1.style.animation = "move5 0.5s 3 forwards";
egg2.style.animation = "move3 0.5s 3 forwards";
egg3.style.animation = "move4 0.5s 3 forwards";
  } 
  

  
egg1.addEventListener("click", () => {
  while (egg1.firstChild) { 
  egg1.firstChild.remove(); }
  egg1.style.backgroundColor="";
  let bunny=  document.createElement("h2");
  bunny.innerText= "🐰";
  egg1.appendChild(bunny);
  bunny.style.fontSize = "3rem";
  bunny.style.marginTop = "7rem";
}) 

 egg2.addEventListener("click", () => {
  while (egg2.firstChild) { 
  egg2.firstChild.remove(); }
  egg2.style.backgroundColor="";
  let bad1 =  document.createElement("h2");
  bad1.innerText= "☹️";
  egg2.appendChild(bad1);
  bad1.style.fontSize = "3rem";
  bad1.style.marginTop = "7rem";
}) 
  
egg3.addEventListener("click",() => {
  while (egg3.firstChild) { 
  egg3.firstChild.remove(); }

  egg3.style.backgroundColor="";
  let bad2 =  document.createElement("h2");
  bad2.innerText= "😟";
  egg3.appendChild(bad2);
  bad2.style.fontSize = "3rem";
  bad2.style.marginTop = "7rem";
}) 
    
  
function mix() {
    return Math.floor(Math.random()*3);
 
}

  
  function changeDuration (){
    egg1.style.animationDuration = '0.3s';
    egg2.style.animationDuration = '0.3s';
    egg3.style.animationDuration = '0.3s';
  }
 
  if(mix() === 0){
      addAnimation1();
      setTimeout(addAnimation1, 500);
      setTimeout(addAnimation2, 1000);
      setTimeout(changeDuration, 1400);
      setTimeout(addAnimation1, 1500);
  }
  else if (mix() === 1) {
      addAnimation2();
      setTimeout(addAnimation2, 500);
      setTimeout(addAnimation1, 1000);
      setTimeout(changeDuration, 1400);
      setTimeout(addAnimation3, 1500);
  }
  else {
      addAnimation3();
      setTimeout(addAnimation1, 500);
      setTimeout(addAnimation1, 1000);
      setTimeout(changeDuration, 1400);
      setTimeout(addAnimation2, 1500);
  }

      mix();
      
    }







