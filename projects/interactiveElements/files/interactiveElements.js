// Interactive Elements Project by Teodora Pencheva

//////REFERENCES
// (1) https://api.jqueryui.com/draggable/#event-start
// This helped me with creating my drag functions.
//
// (2) http://nbartlomiej.github.io/foggy/
//  https://www.sitepoint.com/5-pixelate-image-blur-jquery-plugins/
//This is where I found the Foggy effect I used in my Lips Function.
//
// (3) https://www.w3schools.com/howto/howto_css_shake_image.asp
//This is where I found and what I incorporated into the tickling effect 
//for the neck.
//
// (4) https://codepen.io/anatravas/pen/vyOwOZ
//This is what I used to create the noise effect when dragging
//around the eyes.
//
// (5) https://api.jquery.com/fadein/
//This helped me learn how to fade in and out elements.
//
// (6) https://www.youtube.com/watch?v=Y62EgHvwa8k
//This is the video I downloaded and used in the brain effect.
//
// (7) https://freesound.org/
//This is where I found the audio I edited from. All audio I gathered
// is licensed under the Creative Commons 0 License.



////// GLOBAL VARIABLES
var timedoutNeckE = 0;
var timedoutNeckL = 0;
var timedoutLeft = 0;

var sec = 0;
var timer;

var totalWidth = window.innerWidth;
var totalHeight = window.innerHeight;

var brain = new Audio("audio/brain.mp3"); //(7)
var brainIntro = new Audio("audio/brainIntro.mp3");
var ear = new Audio("audio/ear.mp3");
var earIntro = new Audio("audio/earIntro.mp3");
var eyes = new Audio("audio/eyes.mp3");
var eyesIntro = new Audio("audio/eyesIntro.mp3");
var eyesSIntro = new Audio("audio/eyesSIntro.mp3");
var lips = new Audio("audio/lips.mp3");
var lipsIntro = new Audio("audio/lipsIntro.mp3");
var neck = new Audio("audio/neck.mp3");
var neckIntro = new Audio("audio/neckIntro.mp3");
var nose = new Audio("audio/nose.mp3");
var noseIntro = new Audio("audio/noseIntro.mp3");


////// RANDOM POSITIONS OF IMAGES
$("#brain_n").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#brain_n").css("margin-left", randPosX + "px");
	$("#brain_n").css("margin-top", randPosY + "px");
});

$("#leftEye_n").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#leftEye_n").css("margin-left", randPosX + "px");
	$("#leftEye_n").css("margin-top", randPosY + "px");
});

$("#rightEye_n").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#rightEye_n").css("margin-left", randPosX + "px");
	$("#rightEye_n").css("margin-top", randPosY + "px");
});

$("#ear_n").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#ear_n").css("margin-left", randPosX + "px");
	$("#ear_n").css("margin-top", randPosY + "px");
});

$("#nose").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#nose").css("margin-left", randPosX + "px");
	$("#nose").css("margin-top", randPosY + "px");
});

$("#lips_n").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);

	if(randPosX > totalWidth-100){
		randPosX -= 200;
	}
	if(randPosY > totalHeight-100){
		randPosY -= 200;
	}

	$("#lips_n").css("margin-left", randPosX + "px");
	$("#lips_n").css("margin-top", randPosY + "px");
});

$("#neck").ready(function() {
	var randPosX = randi(totalWidth);
	var randPosY = randi(totalHeight);



	$("#neck").css("margin-left", randPosX + "px");
	$("#neck").css("margin-top", randPosY + "px");
});


// HEADER
$("h1").ready().fadeOut(1500, function(){ //(5)
	$(this).remove();
});


// LIPS EFFECT
$( function() { //(1)
    $("#lips_n").draggable({
    	start: function( event, ui ) {
    		lipsStart();
    	},
    	stop: function( event, ui ) {
    		lipsReset();
    	}
    }); 
});

function lipsStart(){ //(2)
	$("#lips_n").attr("src", "images/lips_u.jpg");
	$("#lips_n").css({
		"z-index": "100"
	});

    sec = 0;
    timer = setInterval(function(){
    sec++;
	if (sec == 2) {
		lipsIntro.play();
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 0.2,
			opacity: 1
		});
	}
	if (sec == 3) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 0.4,
			opacity: 1
		});
	}
	if (sec == 4) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 0.7,
			opacity: 1
		});
	}
	if (sec == 5) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 1,
			opacity: 1
		});
	}
	if (sec == 6) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 1.4,
			opacity: 1
		});
	}
	if (sec == 7) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 1.8,
			opacity: 1
		});
	}
	if (sec == 8) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 2.2,
			opacity: 1
		});
	}
	if (sec == 9) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 2.7,
			opacity: 1
		});
	}
	if (sec == 10) {
		$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 3,
			opacity: 1
		});
	}

	if (sec >= 10) {
		lipsIntro.pause();
		lips.play();
		lips.loop = true;
		if (sec%3 == 0) {
			$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
			blurRadius: 2,
			opacity: 1
			});
		}
		else {
			$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
				blurRadius: 3,
				opacity: 1
			});
		}
	}}, 1000); 
    return sec
};

function lipsReset(){ //(2)
	lips.pause();
	lipsIntro.pause();
	lips.currentTime = 0;
	lipsIntro.currentTime = 0;

	$("#lips_n").attr("src", "images/lips_n.jpg");
	$("#lips_n").css({
		"z-index": "auto"
	});

	$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #neck").foggy({
		blurRadius: 0,
		opacity: 1
	});

    clearInterval(timer);  
};


//NOSE EFFECT
$( function() { //(1)
    $("#nose").draggable({
    	start: function( event, ui ) {
    		noseStart();
    	},
    	stop: function( event, ui ) {
    		noseReset();
    	}
    });
});

function noseStart(){
	noseIntro.play();

	sec = 0;
    timer = setInterval(function(){
    sec++;
    if (sec > 43){
    	noseIntro.pause();
        nose.play();
        nose.loop = true;
    }}, 1000); 
    return sec
};

function noseReset(){
	nose.pause();
	noseIntro.pause();
	nose.currentTime = 0;
	noseIntro.currentTime = 0;

    clearInterval(timer);  
};


//NECK EFFECT
$( function() { //(1)
    $("#neck").draggable({
    	start: function( event, ui ) {
    		neckStart();
    	},
    	stop: function( event, ui ) {
    		neckReset();
    	}
    });
});

function neckStart(){ //(3)
	neckIntro.play();

	$("#neck").css({
		"animation": "shake 0.5s", "animation-iteration-count": "infinite", "animation-delay": "1.5s"
	});

	$("#brain_n").css({
		"animation": "shake 0.5s", "animation-iteration-count": "infinite", "animation-delay": "4.85s"
	});

	$("#leftEye_n, #rightEye_n").css({
		"animation": "shake 0.5s", "animation-iteration-count": "infinite", "animation-delay": "6.1s"
	});

	$("#nose, #ear_n, #lips_n").css({
		"animation": "shake 0.5s", "animation-iteration-count": "infinite", "animation-delay": "9s"
	});
	
	timedoutNeckE = setTimeout (eyeChange, 6400);
	timedoutNeckL = setTimeout (lipsLaugh, 9000);

	sec = 0;
    timer = setInterval(function(){
    sec++;
    if (sec >= 9){
    	neckIntro.pause();
        neck.play();
        neck.loop = true;
    }}, 1000); 
    return sec
};

function neckReset(){ //(3)
	$("#leftEye_n").attr("src", "images/leftEye_n.jpg");
	$("#rightEye_n").attr("src", "images/rightEye_n.jpg");
	$("#lips_n").attr("src", "images/lips_n.jpg");
	$("#brain_n, #leftEye_n, #rightEye_n, #ear_n, #nose, #lips_n, #neck").css({"animation-play-state": "paused"});

	clearTimeout(timedoutNeckE);
	clearTimeout(timedoutNeckL);

	neck.pause();
	neckIntro.pause();
	neck.currentTime = 0;
	neckIntro.currentTime = 0;

	clearInterval(timer);  
};

//EAR EFFECT
$( function() { //(1)
    $("#ear_n").draggable({
    	start: function( event, ui ) {
    		earStart();
    	},
    	stop: function( event, ui ) {
    		earReset();
    	}
    });
});


function earStart(){
	

	$("#ear_n").css({
		"z-index": "100"
	});

	sec = 0;
    timer = setInterval(function(){
    sec++;
    if (sec == 2) {
		earIntro.play();
	}
    if (sec == 5) {
		pulseFive();
	}
	if (sec == 6) {
		$("#pulse5").remove();
	}
	if (sec == 7) {
		pulseFive();
	}
	if (sec == 8) {
		$("#pulse5").remove();
	}
	if (sec == 9) {
		pulseFour();
	}
	if (sec == 10) {
		pulseFive();
	}
	if (sec == 11) {
		pulseFour();
	}
	if (sec == 12) {
		pulseThree();
	}
	if (sec == 13) {
		pulseFour();
	}
	if (sec == 14) {
		pulseThree();
	}
	if (sec == 15) {
		pulseFour();
	}
	if (sec == 16) {
		pulseTwo();
		earTwo();
	}
	if (sec == 17) {
		pulseThree();
	}
	if (sec == 18) {
		pulseTwo();
		earThree();
	}
	if (sec == 19) {
		pulseThree();
	}
	if (sec == 20) {
		pulseOne();
		earFour();
		earIntro.pause();
		ear.play();
		ear.loop = true;
	}
	if (sec > 20) {
		if (sec%2 == 0){
			pulseOne();
		}
		else {
			pulseTwo();
		}
	}}, 1000); 
    working = true;
    return working, sec
};

function earReset(){
	$("#ear_n").attr("src", "images/ear_n.jpg");
	$("#ear_n").css({
		"z-index": "auto"
	});

	ear.pause();
	earIntro.pause();
	ear.currentTime = 0;
	earIntro.currentTime = 0;

	$("#pulse1").remove();
	$("#pulse2").remove();
	$("#pulse3").remove();
	$("#pulse4").remove();
	$("#pulse5").remove();

    clearInterval(timer); 
};


//LEFT EYE EFFECT
$( function() { //(1)
    $("#leftEye_n").draggable({
    	start: function( event, ui ) {
    		leftEyeStart();
    	},
    	stop: function( event, ui ) {
    		leftEyeReset();
    	}
    });
});

function leftEyeStart(){
	$("#leftEye_n").attr("src", "images/leftEye_u.jpg");
	$("#rightEye_n").attr("src", "images/rightEye_u.jpg");

	eyeEffects();

	eyesIntro.play();
	eyesSIntro.play();
};

function leftEyeReset(){
	$("#leftEye_n").attr("src", "images/leftEye_n.jpg");
	$("#rightEye_n").attr("src", "images/rightEye_n.jpg");

	$("body").undarken();
	$(".noise-wrapper").css({
		"opacity": "0"
	});

	eyes.pause();
	eyesIntro.pause();
	eyesSIntro.pause();
	eyes.currentTime = 0;
	eyesIntro.currentTime = 0;
	eyesSIntro.currentTime = 0;
	
    clearInterval(timer);  
};


//RIGHT EYE EFFECT
$( function() { //(1)
    $("#rightEye_n").draggable({
    	start: function( event, ui ) {
    		rightEyeStart();
    	},
    	stop: function( event, ui ) {
    		rightEyeReset();
    	}
    });
});

function rightEyeStart(){
	$("#rightEye_n").attr("src", "images/rightEye_u.jpg");
	$("#leftEye_n").attr("src", "images/leftEye_u.jpg");

	eyesIntro.play();
	eyesSIntro.play();

	eyeEffects();
};

function rightEyeReset(){
	$("#rightEye_n").attr("src", "images/rightEye_n.jpg");
	$("#leftEye_n").attr("src", "images/leftEye_n.jpg");

	$("body").undarken();
	$(".noise-wrapper").css({
		"opacity": "0"
	});

	eyes.pause();
	eyesIntro.pause();
	eyesSIntro.pause();
	eyes.currentTime = 0;
	eyesIntro.currentTime = 0;
	eyesSIntro.currentTime = 0;
	
    clearInterval(timer);  
};


//BRAIN EFFECT
$( function() { //(1)
    $("#brain_n").draggable({
    	start: function( event, ui ) {
    		brainStart();
    	},
    	stop: function( event, ui ) {
    		brainReset();
    	}
    });
});

function brainStart(){ //(5) (6)
	brainIntro.play();

	$("#brain_n").css({
		"z-index": "100"
	});

	video();
	$("#tvVideo").hide().fadeIn(12000);
	$("#tvVideo").trigger("play"); 

	sec = 0;
    timer = setInterval(function(){
    sec++;
    if (sec > 2){
    	if (sec%2 == 0){
    		$("#brain_n").attr("src", "images/brain_u.jpg");
    	}
    	else {
    		$("#brain_n").attr("src", "images/brain_n.jpg");
    	}
    }
    if (sec >= 12){
    	brainIntro.pause();
        brain.play();
        brain.loop = true;
    }}, 1000); 
    return sec
};

function brainReset(){
	$("#brain_n").attr("src", "images/brain_n.jpg");

	brain.pause();
	brainIntro.pause();
	brain.currentTime = 0;
	brainIntro.currentTime = 0;

	$("#brain_n").css({
		"z-index": "auto"
	});

	$("#tvVideo").remove();
	
    clearInterval(timer);  
};


// PULSE EFFECT
function pulseOne(){
	$('body').prepend('<img id="pulse1" src="images/pulse1.png" />');
	$("#pulse1").css({
		"height": "100%",
		"width": "100%",
		"z-index": "15",
		"position": "absolute"
	});

	$("#pulse2").remove();
	$("#pulse3").remove();
	$("#pulse4").remove();
	$("#pulse5").remove();
};

function pulseTwo(){
	$('body').prepend('<img id="pulse2" src="images/pulse2.png" />')
	$("#pulse2").css({
		"height": "100%",
		"width": "100%",
		"z-index": "16",
		"position": "absolute"
	});

	$("#pulse1").remove();
	$("#pulse3").remove();
	$("#pulse4").remove();
	$("#pulse5").remove();
};

function pulseThree(){
	$('body').prepend('<img id="pulse3" src="images/pulse3.png" />')
	$("#pulse3").css({
		"height": "100%",
		"width": "100%",
		"z-index": "17",
		"position": "absolute"
	});

	$("#pulse1").remove();
	$("#pulse2").remove();
	$("#pulse4").remove();
	$("#pulse5").remove();
};

function pulseFour(){
	$('body').prepend('<img id="pulse4" src="images/pulse4.png" />')
	$("#pulse4").css({
		"height": "100%",
		"width": "100%",
		"z-index": "18",
		"position": "absolute"
	});

	$("#pulse1").remove();
	$("#pulse2").remove();
	$("#pulse3").remove();
	$("#pulse5").remove();
};

function pulseFive(){
	$('body').prepend('<img id="pulse5" src="images/pulse5.png" />')
	$("#pulse5").css({
		"height": "100%",
		"width": "100%",
		"z-index": "19",
		"position": "absolute"
	});

	$("#pulse1").remove();
	$("#pulse2").remove();
	$("#pulse3").remove();
	$("#pulse4").remove();
};


// EAR ANIMATION
function earOne(){
	$("#ear_n").attr("src", "images/ear_u1.jpg");
};

function earTwo(){
	$("#ear_n").attr("src", "images/ear_u2.jpg");
};

function earThree(){
	$("#ear_n").attr("src", "images/ear_u3.jpg");
};

function earFour(){
	$("#ear_n").attr("src", "images/ear_u4.jpg");
};


// OTHER FUNCTIONS
function video(){
	$('body').prepend('<video autoplay loop muted id="tvVideo" /> <source src="images/tvVideo.mp4" /> </video />');
    $("#tvVideo").css({
		"height": totalHeight,
		"width": totalWidth,
		"z-index": "15",
		"position": "absolute",
		"object-fit": "fill",
		"opacity": "0.6"
	});
};

function eyeEffects(){ //(4)
	sec = 0;
    timer = setInterval(function(){
    sec++;
	if (sec == 2) {
		$("body").darken({
			"opacity": 0.05
		});
	}
	if (sec == 3) {
		$("body").darken({
			"opacity": 0.1
		});
	}
	if (sec == 4) {
		$("body").darken({
			"opacity": 0.15
		});
		$(".noise-wrapper").css({
			"opacity": "0.1"
		});
		$(".noise").css({
			"background-size": "320px 320px"
		});
	}
	if (sec == 5) {
		$("body").darken({
			"opacity": 0.2
		});
		$(".noise-wrapper").css({
			"opacity": "0.2"
		});
		$(".noise").css({
			"background-size": "340px 340px"
		});
	}
	if (sec == 6) {
		$("body").darken({
			"opacity": 0.25
		});
		$(".noise-wrapper").css({
			"opacity": "0.3"
		});
		$(".noise").css({
			"background-size": "360px 360px"
		});
	}
	if (sec == 7) {
		$("body").darken({
			"opacity": 0.3
		});
		$(".noise-wrapper").css({
			"opacity": "0.4"
		});
		$(".noise").css({
			"background-size": "380px 380px"
		});
	}
	if (sec == 8) {
		$("body").darken({
			"opacity": 0.35
		});
		$(".noise-wrapper").css({
			"opacity": "0.5"
		});
		$(".noise").css({
			"background-size": "400px 400px"
		});
	}
	if (sec == 9) {
		$("body").darken({
			"opacity": 0.4
		});
		$(".noise-wrapper").css({
			"opacity": "0.6"
		});
		$(".noise").css({
			"background-size": "420px 420px"
		});
	}
	if (sec == 10) {
		$("body").darken({
			"opacity": 0.45
		});
		$(".noise-wrapper").css({
			"opacity": "0.7"
		});
		$(".noise").css({
			"background-size": "440px 440px"
		});
	}
	if (sec == 11) {
		$("body").darken({
			"opacity": 0.5
		});
		$(".noise-wrapper").css({
			"opacity": "0.8"
		});
		$(".noise").css({
			"background-size": "460px 460px"
		});
	}
	if (sec == 12) {
		$("body").darken({
			"opacity": 0.55
		});
		$(".noise-wrapper").css({
			"opacity": "0.9"
		});
		$(".noise").css({
			"background-size": "480px 480px"
		});
	}
	if (sec == 13) {
		$("body").darken({
			"opacity": 0.6
		});
		$(".noise-wrapper").css({
			"opacity": "1"
		});
		$(".noise").css({
			"background-size": "500px 500px"
		});
	}
	if (sec == 14) {
		$("body").darken({
			"opacity": 0.65
		});
	}
	if (sec == 15) {
		eyesSIntro.pause();
        eyes.play();
        eyes.loop = true;

		$("body").darken({
			"opacity": 0.7
		});
	}}, 1000); 
	working = true;
    return working, sec
};

function eyeChange(){
	$("#leftEye_n").attr("src", "images/leftEye_u.jpg");
	$("#rightEye_n").attr("src", "images/rightEye_u.jpg");
};

function lipsLaugh(){
	$("#lips_n").attr("src", "images/lips_u.jpg");
};

function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
};

console.log("Interactive Elements");

// ORIGINAL 
// function reset(){
//     working = false;
//     counter = 0;
//     clearInterval(timer);  

//     return working, counter
// }

// function start(){
//     sec = 0;
//     timer = setInterval(function(){
//     sec++;
//     if (sec >= 10){
//         
//     }
//     if (sec < 10){
//         
//     }}, 1000); 
//     working = true;
//     return working, sec
// }


// JQUERY FOGGY LIBRARY (2)
(function(e){
	e.fn.foggy=function(t){
		var n={opacity:.8,blurRadius:2,quality:16,cssFilterSupport:true};
		var r={opacity:1,blurRadius:0};
		var i;if(t==false){i=e.extend(n,r)}else{i=e.extend(n,t)}
		var s=function(e,t,n,r){this.content=e;this.position=t;this.offset=n;this.opacity=r};
		s.prototype.render=function(t){e("<div/>",{html:this.content,"class":"foggy-pass-"+this.position}).css({position:this.position,opacity:this.opacity,top:this.offset[0],left:this.offset[1]}).appendTo(t)};
		var o=function(e){this.radius=e};
		o.prototype.includes=function(e,t){if(Math.pow(e,2)+Math.pow(t,2)<=Math.pow(this.radius,2)){return true}else{return false}};
		o.prototype.points=function(){var e=[];for(var t=-this.radius;t<=this.radius;t++){for(var n=-this.radius;n<=this.radius;n++){if(this.includes(t,n)){e.push([t,n])}}}return e};
		var u=function(e,t){this.element=e;this.settings=t};u.prototype.calculateOffsets=function(t,n){var r=e.grep((new o(t)).points(),function(e){return e[0]!=0||e[1]!=0});
		var i;if(r.length<=n){i=r}else{var s=r.length-n;var u=[];for(var a=0;a<s;a++){u.push(Math.round(a*(r.length/s)))}i=e.grep(r,function(t,n){if(e.inArray(n,u)>=0){return false}else{return true}})}return i};
		u.prototype.getContent=function(){var t=e(this.element).find(".foggy-pass-relative")[0];if(t){return e(t).html()}else{return e(this.element).html()}};
		u.prototype.render=function(){var t=this.getContent();e(this.element).empty();var n=e("<div/>").css({position:"relative"});
		var r=this.calculateOffsets(this.settings.blurRadius*2,this.settings.quality);
		var i=this.settings.opacity*1.2/(r.length+1);(new s(t,"relative",[0,0],i)).render(n);e(r).each(function(e,r){(new s(t,"absolute",r,i)).render(n)});
		n.appendTo(this.element)};var a=function(e,t){this.element=e;this.settings=t};
		a.prototype.render=function(){var t=(""+i.opacity).slice(2,4);var n=this.settings.blurRadius;
		e(this.element).css({"-webkit-filter":"blur("+n+"px)",opacity:i.opacity})};
		return this.each(function(e,t){if(i.cssFilterSupport&&"-webkit-filter"in document.body.style){(new a(t,i)).render()}else{(new u(t,i)).render()}})}})(jQuery)