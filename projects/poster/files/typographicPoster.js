// TYPOGRAPHIC POSTER

////// GLOBAL VARIABLES
var canvas;
var ctx;
var w = 200;
var h;
var s = 90;
var l = 46;

var colours = [randN(157.5)+185, 348, 57, 57, 57];
var coloursBottom = [randN(157.5)+185, 348, 57, 57, 57];

var allStrokes = { //lines
    "x": 0,
    "y": 0,
    "h": 100,
    "a": 0.9,
    "dx": 10,
    "ey": randN(200)
}

var allStrokesBottom = { //lines
    "x": 0,
    "y": h,
    "h": 100,
    "a": 0.9,
    "dx": 10,
    "ey": randN(200)
}



////// EXECUTABLE CODE
setUpCanvas();
for(var i=0; i<14; i++){ //top row of bars
    colours.shift();
    colours.unshift(randN(157.5)+185);
    lineStroke(allStrokes, colours[randi(i%colours.length)], s, l);
    if (i == 7 || i == 12 || i == 5) {
        lineStroke(allStrokes, colours[randi(i%colours.length)], 0,100);
    }
}

for(var i=0; i<16; i++){ //bottom row of bars
    coloursBottom.shift();
    coloursBottom.unshift(randN(157.5)+185);
    lineStrokeBottom(allStrokesBottom, coloursBottom[randi(i%coloursBottom.length)], s, l);
    if ( i == 10 || i == 2) {
        lineStrokeBottom(allStrokesBottom, coloursBottom[randi(i%coloursBottom.length)], 0,100);
    }
}



////// FUNCTIONS
function lineStroke(o, a, b, c){  
	var y = 0;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    o.y += rand(100)+100;
    ctx.lineTo(o.x, o.y);
    ctx.strokeStyle = "hsla("+a+", "+b+"%, "+c+"%, "+o.a+")";
    ctx.lineWidth = 15;
    // console.log(randi(colour.length));
    ctx.stroke();

    o.y *= y;
    o.x += 15;
}

function lineStrokeBottom(o, a, b, c){  
    var y = h;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    o.y -= rand(200)+380;
    ctx.lineTo(o.x, o.y);
    ctx.strokeStyle = "hsla("+a+", "+b+"%, "+c+"%, "+o.a+")";
    ctx.lineWidth = 15;
    // console.log(randi(colour.length));
    ctx.stroke();

    o.y = h;
    o.x += 15;
}



function clear(){  //Setup Code
    ctx.clearRect(0,0,w,h);
}

function rand(r){
    var result = Math.random()*r;
    return result
}

function randN(r){
    var result = Math.random()*r - r/2;
    return result
}

function randi(r){ 
    var result = Math.floor(Math.random()*r);
    return result;
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
    h = canvas.height;
    return h
}


console.log("typographic poster");