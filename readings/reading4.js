//Reading 4

//GLOBAL VARIABLES
var m = ["I love you", "I miss you", "my one and only", "XOXO", "Be Mine"];
var c = ["#FC1D7A", "#FC1D4C", "#FC1D30", "#FC1DCC", "#C71DFC"];


////// EXECUTABLE CODE
for(var i=0; i<5; i++){ //top row of bars
    document.getElementById("message").innerHTML = m[randi(i%m.length+1)];
	document.getElementById("message").style.color = c[randi(i%c.length+1)];
}


//FUNCTIONS
function randi(r){ 
    var result = Math.floor(Math.random()*r);
    return result;
}

console.log("reading 4");