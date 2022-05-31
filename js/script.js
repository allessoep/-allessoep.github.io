//desktop//
document.getElementById( "logoimage" ).onclick= function(){
let str = document.getElementById("sidebartitel").innerHTML;
document.getElementById("sidebartitel").innerHTML =  "javascript test";
};


//mobile//
document.getElementById("artimage").ontouchstart = function() {
  element = document.querySelector('#sidebarcontent');
  element.style.visibility = 'visible';
};

document.getElementById("filterbarcontent").ontouchstart = function() {
  element = document.querySelector('#sidebarcontent');
  element.style.visibility = 'hidden';
};
