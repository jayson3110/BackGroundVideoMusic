let title1 = document.getElementById('first-title');

let title2 = document.getElementById('second-title');


//Third, create variable so is can check if this element is first element or second element
let checkTimes = true;

function hapyFade() {
setTimeout(function(){ 

// Sixthly,Evry time checkTimes is reverse to aprouch toggle element
  if (checkTimes == true) {
  
  // Seventh, In the first case of variapple, hide the first element and show the second
    title1.style.opacity =  0;
    title2.style.opacity =  1;

    var timerId = setInterval(function() { // start interval loop
    var opacity = title2.style.opacity; // get current opacity
    if (opacity == 0) { // check if its 0 yet
      clearInterval(timerId); // if so, exit from interval loop
    } else {
      title2.style.opacity = opacity - 0.07; // else remove 0.05 from opacity
    }
  }, 700);
// Sixthly too, here reverse variable   
  // checkTimes = false;
  } 
  
  // Fifth, same a function inside setTimeOut so reabeate this each 2 second

}, 4000);
}


hapyFade();





  
// setTimeout(function() { // start a delay
//   var fade = document.getElementById("fade"); // get required element
//   fade.style.opacity = 1; // set opacity for the element to 1
//   var timerId = setInterval(function() { // start interval loop
//     var opacity = fade.style.opacity; // get current opacity
//     if (opacity == 0) { // check if its 0 yet
//       clearInterval(timerId); // if so, exit from interval loop
//     } else {
//       fade.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
//     }
//   }, 100); // run every 0.1 second
// }, 3000); // wait to run after 5 seconds