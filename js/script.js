document.getElementById( "logoimage" ).onclick= function(){
let str = document.getElementById("sidebartekst").innerHTML;
document.getElementById("sidebartekst").innerHTML =  "javascript test";
};



document.getElementById( "logoimage" ).ontouchstart = function(){
let str = document.getElementById("sidebartekst").innerHTML;
document.getElementById("sidebartekst").innerHTML =  "High Fidelity <br> 17.5 x 16 cm";
};
