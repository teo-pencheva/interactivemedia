//Reading 4

//GLOBAL VARIABLES
var c = ["#FC1D7A", "#FC1D4C", "#FC1D30", "#FC1DCC", "#C71DFC"];


////// EXECUTABLE CODE
for(var i=0; i<5; i++){ //top row of bars
	document.getElementById("message").style.color = c[randi(i%c.length+1)];
}


//FUNCTIONS
function randi(r){ 
    var result = Math.floor(Math.random()*r);
    return result;
}

console.log("reading 4");