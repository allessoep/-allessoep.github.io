//desktop//
document.getElementById( "lightbutton" ).onclick= function(){
document.getElementById("sidebartitel").innerHTML =  "javascript test";
document.getElementById("sidebartekst").innerHTML =  "<p>◢ javascript test</p> <p>◢ javascipt test2</p>";
};

document.getElementById( "lightbutton" ).onclick= function(){
document.getElementById("sidebartitel").innerHTML =  "javascript test";
document.getElementById("sidebartekst").innerHTML =  "<p>◢ javascript test</p> <p>◢ javascipt test2</p>";
};

//mobile//
document.getElementById("logoimage").ontouchstart = function() {
  element = document.querySelector('#sidebarcontent');
  element.style.visibility = 'visible';
};

document.getElementById("filterbarcontent").ontouchstart = function() {
  element = document.querySelector('#sidebarcontent');
  element.style.visibility = 'hidden';
};
