// Index by Teodora Pencheva

//////REFERENCES
// (1) https://codepen.io/ma_suwa/pen/eYdZVML
// This helped me figure out how to animate my Info Pop up using keyframes
//
// (2) https://github.com/davidjbradshaw/image-map-resizer
//  https://raw.githubusercontent.com/davidjbradshaw/imagemap-resizer/master/js/imageMapResizer.min.js
//This is where I found the image map resizer
//
// (3) https://vincentgarreau.com/particles.js/
//  https://github.com/VincentGarreau/particles.js/
//This is where I found the paricle library


//////PARTICLES
particlesJS("particles-js", { //(3)
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#eeeeee"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 1
      },
      "image": {
        "src": "none",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 80,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


////// CIRCLE
// CIRCLE HOVER
$(".circle").mouseenter(function(){
	$("#course, #name").fadeIn().css({
		"display": "block"
	});
});

$(".circle").mouseleave(function(){
	$("#course, #name").fadeOut();
});

// CIRCLE ANIMATION
function cAnimation(){ //(1)
	$(".circle").css({
		"animation": "box",
		"animation-duration": "3s",
		"animation-fill-mode": "forwards"
	});
}



////// FINGERS
//THUMB
$(".thumb").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="images/hand1.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="images/blank.png"/>');

	cAnimation();
	gDisplay();
	zChange();
	thumbInfo();
});

//FORE
$(".fore").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="images/hand2.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="images/blank.png"/>');

	cAnimation();
	gDisplay();
	zChange();
	foreInfo();
});

//MIDDLE
$(".middle").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="images/hand3.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="index/images/blank.png"/>');

	cAnimation();
	gDisplay();
	zChange();
	middleInfo();
});

//RING
$(".ring").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="index/images/hand4.png"/>');
	$('.handHolder').prepend('<img id="blank" src="index/images/blank.png"/>');

	cAnimation();
	gDisplay();
	zChange();
	ringInfo();
});

//PINKY
$(".pinky").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="index/images/hand5.png"/>');
	$('.handHolder').prepend('<img id="blank" src="index/images/blank.png"/>');

	cAnimation();
	gDisplay();
	zChange();
	pinkyInfo();
});



////// INFO GRID
//DISPLAY
function gDisplay(){
	$(".grid-1").css({
		"display": "grid"
	});
	$(".grid-2").css({
		"display": "grid"
	});
}

function gDisplayOff(){
	$(".grid-1").css({
		"display": "none"
	});
	$(".grid-2").css({
		"display": "none"
	});
}

function zChange(){
	$("#hand").css({
		"z-index": "-10"
	});
	$("#particles-js").css({
		"z-index": "-100"
	});
}

function zChangeOff(){
	$("#hand").css({
		"z-index": "100"
	});
	$("#particles-js").css({
		"z-index": "95"
	});
}

//EXIT BUTTON
$("#exit").click(function(){
	$(".circle").css({
		"animation": "boxReverse",
		"animation-duration": "3s",
		"animation-fill-mode": "forwards"
	});
	gDisplayOff();
	zChangeOff();

	$("#hand1").remove();
	$('#blank').remove();

	$('.group-1').remove();
	$('.group-2-img').remove();
	$('.group-3-ex').remove();
	$('.group-3-sh').remove();
	$('.group-2').remove()
	$('.group-3').remove();
});

// THUMB
function thumbInfo() {
	$(".grid-1").prepend('<div class="group-3-sh"> <p>Welcome! Here is a collection of all the different works I completed while taking the Interactive Design: Web course instructed by Peter Ha. The purpose of the course was to learn how to weave a range of online technologies into engaging interactive experiences. In this course, students would learn the basics of web technologies that are fundamental to building an online presence for any design project. Students would learn how to identify the current technologies underlying social media interfaces, mobile web applications that rely on browsers and apps. Interactive Design: Web offered an interesting and educational experience that will allow me to grow even further in the future.</p> <img id="thumbnail" src="images/thumbnail.png"> </div>');
	$(".grid-1").prepend('<div class="group-1"> <!-- Start Letter I --> <div class="letter"> <!-- row 1 --> <div class="i i-1-4-d"></div> <div class="i i-1-4-dd"></div> <div class="i i-1-5-d"></div> <div class="i i-1-5-dd"></div> <!-- row 2 --> <div class="i i-2-2-d"></div> <div class="i i-2-2-dd"></div> <div class="i i-2-3-d"></div> <div class="i i-2-3-dd"></div> <div class="i i-2-32-d"></div> <div class="i i-2-32-dd"></div> <div class="i i-2-4-d"></div> <div class="i i-2-4-dd"></div> <div class="i i-2-5-d"></div> <div class="i i-2-5-dd"></div> <!-- row 4 --> <div class="i i-4-2-d"></div> <div class="i i-4-2-dd"></div> <div class="i i-4-3-d"></div> <div class="i i-4-3-dd"></div> <div class="i i-4-32-d"></div> <div class="i i-4-32-dd"></div> <div class="i i-4-4-d"></div> <div class="i i-4-4-dd"></div> <div class="i i-4-5-d"></div> <div class="i i-4-5-dd"></div> <!-- row 5 --> <div class="i i-5-4-d"></div> <div class="i i-5-4-dd"></div> <div class="i i-5-5-d"></div> <div class="i i-5-5-dd"></div> <!-- strokes --> <div class="i-stroke-1"></div> </div> <!-- End Letter I --> <!-- Start Letter N --> <div class="letter"> <!-- row 1 --> <div class="n n-1-4-d"></div> <div class="n n-1-4-dd"></div> <div class="n n-1-5-d"></div> <div class="n n-1-5-dd"></div> <!-- row 2 --> <div class="n n-2-5-d"></div> <div class="n n-2-5-dd"></div> <!-- row 4 --> <div class="n n-4-1-d"></div> <div class="n n-4-1-dd"></div> <div class="n n-4-4-d"></div> <div class="n n-4-4-dd"></div> <!-- diagonal line --> <div class="n n-d-1-d"></div> <div class="n n-d-1-dd"></div> <div class="n n-d-2-d"></div> <div class="n n-d-2-dd"></div> <div class="n n-d-3-d"></div> <div class="n n-d-3-dd"></div> <div class="n n-d-4-d"></div> <div class="n n-d-4-dd"></div> <div class="n n-d-5-d"></div> <div class="n n-d-5-dd"></div> <!-- strokes --> <div class="n-stroke-1"></div> <div class="n-stroke-2"></div> </div> <!-- End Letter N --> <!-- Start Letter T --> <div class="letter"> <!-- row 1 --> <div class="t t-1-4-d"></div> <div class="t t-1-4-dd"></div> <div class="t t-1-5-d"></div> <div class="t t-1-5-dd"></div> <!-- row 2 --> <div class="t t-2-2-d"></div> <div class="t t-2-2-dd"></div> <div class="t t-2-3-d"></div> <div class="t t-2-3-dd"></div> <div class="t t-2-32-d"></div> <div class="t t-2-32-dd"></div> <div class="t t-2-4-d"></div> <div class="t t-2-4-dd"></div> <div class="t t-2-5-d"></div> <div class="t t-2-5-dd"></div> <!-- row 4 --> <div class="t t-4-3-d"></div> <div class="t t-4-3-dd"></div> <div class="t t-4-32-d"></div> <div class="t t-4-32-dd"></div> <!-- strokes --> <div class="t-stroke-1"></div> </div> <!-- End Letter T --> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter O --> <div class="letter"> <!-- row 1 --> <div class="o o-1-4-d"></div> <div class="o o-1-4-dd"></div> <div class="o o-1-5-d"></div> <div class="o o-1-5-dd"></div> <!-- row 2 --> <div class="o o-2-2-d"></div> <div class="o o-2-2-dd"></div> <div class="o o-2-4-d"></div> <div class="o o-2-4-dd"></div> <div class="o o-2-5-d"></div> <div class="o o-2-5-dd"></div> <!-- row 4 --> <div class="o o-4-1-d"></div> <div class="o o-4-1-dd"></div> <div class="o o-4-2-d"></div> <div class="o o-4-2-dd"></div> <div class="o o-4-4-d"></div> <div class="o o-4-4-dd"></div> <!-- row 5 --> <div class="o o-5-1-d"></div> <div class="o o-5-1-dd"></div> <div class="o o-5-2-d"></div> <div class="o o-5-2-dd"></div> <!-- strokes --> <div class="o-stroke-1"></div> <div class="o-stroke-2"></div> <div class="o-stroke-3"></div> <div class="o-stroke-4"></div> </div> <!-- End Letter O --> </div>');
	$(".grid-2").prepend('<div class="group-2-img"></div>');
}

// FORE
function foreInfo() {
	$(".grid-1").prepend('<div class="group-3"> <h2>ACT I: CSS Typeface</h2> <p>Created a typeface of 26 characters using only HTML and CSS. The purpose of this project was to become comfortable with the use of code to create forms and to push the limits of CSS as a drawing medium. To review my process of this work, click the following: <a href="https://teo-pencheva.github.io/interactivemedia/projects/CSSTypeface/process/typefaceProcess.html">LINK</a></p> <h2>ACT I: Web Typographic Poster</h2> <p>Chose a content package and created an online poster using the CSS Typeface I previously completed. The purpose of this assignment was to design a purely engaging typographic web page and to develop my skills with the range of typographic tools available in CSS. To review my process of this work, click the following: <a href="https://teo-pencheva.github.io/interactivemedia/projects/poster/process/posterProcess.html">LINK</a></p> <h2>ACT II: Interactive Elements</h2> <p>I was assigned an interactive element and was tasked to create an abstract website that centers on that interaction. The purpose of this project was to explore the possibilities and limitations of the web as a medium and practice being resourceful and “learning on demand”. To review my process of this work, click the following: <a href="https://teo-pencheva.github.io/interactivemedia/projects/interactiveElements/process/interactiveProcess.html">LINK</a></p> </div>');
	$(".grid-1").prepend('<div class="group-1"> <!-- Start Letter P --> <div class="letter"> <!-- row 2 --> <div class="p p-2-2-d"></div> <div class="p p-2-2-dd"></div> <div class="p p-2-4-d"></div> <div class="p p-2-4-dd"></div> <!-- row 3 --> <div class="p p-3-2-d"></div> <div class="p p-3-2-dd"></div> <div class="p p-3-4-d"></div> <div class="p p-3-4-dd"></div> <div class="p p-3-5-d"></div> <div class="p p-3-5-dd"></div> <div class="p p-32-2-d"></div> <div class="p p-32-2-dd"></div> <div class="p p-32-4-d"></div> <div class="p p-32-4-dd"></div> <div class="p p-32-5-d"></div> <div class="p p-32-5-dd"></div> <!-- row 4 --> <div class="p p-4-1-d"></div> <div class="p p-4-1-dd"></div> <!-- row 5 --> <div class="p p-5-1-d"></div> <div class="p p-5-1-dd"></div> <div class="p p-5-2-d"></div> <div class="p p-5-2-dd"></div> <!-- strokes --> <div class="p-stroke-1"></div> <div class="p-stroke-2"></div> </div> <!-- End Letter P --> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter O --> <div class="letter"> <!-- row 1 --> <div class="o o-1-4-d"></div> <div class="o o-1-4-dd"></div> <div class="o o-1-5-d"></div> <div class="o o-1-5-dd"></div> <!-- row 2 --> <div class="o o-2-2-d"></div> <div class="o o-2-2-dd"></div> <div class="o o-2-4-d"></div> <div class="o o-2-4-dd"></div> <div class="o o-2-5-d"></div> <div class="o o-2-5-dd"></div> <!-- row 4 --> <div class="o o-4-1-d"></div> <div class="o o-4-1-dd"></div> <div class="o o-4-2-d"></div> <div class="o o-4-2-dd"></div> <div class="o o-4-4-d"></div> <div class="o o-4-4-dd"></div> <!-- row 5 --> <div class="o o-5-1-d"></div> <div class="o o-5-1-dd"></div> <div class="o o-5-2-d"></div> <div class="o o-5-2-dd"></div> <!-- strokes --> <div class="o-stroke-1"></div> <div class="o-stroke-2"></div> <div class="o-stroke-3"></div> <div class="o-stroke-4"></div> </div> <!-- End Letter O --> <!-- Start Letter J --> <div class="letter"> <!-- row 2 --> <div class="j j-2-3-d"></div> <div class="j j-2-3-dd"></div> <div class="j j-2-4-d"></div> <div class="j j-2-4-dd"></div> <!-- row 4 --> <div class="j j-4-2-d"></div> <div class="j j-4-2-dd"></div> <div class="j j-4-3-d"></div> <div class="j j-4-3-dd"></div> <div class="j j-4-4-d"></div> <div class="j j-4-4-dd"></div> <!-- row 5 --> <div class="j j-5-3-d"></div> <div class="j j-5-3-dd"></div> <div class="j j-5-4-d"></div> <div class="j j-5-4-dd"></div> <!-- strokes --> <div class="j-stroke-1"></div> <div class="j-stroke-2"></div> </div> <!-- End Letter J --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter C --> <div class="letter"> <!-- row 1 --> <div class="c c-1-1-d"></div> <div class="c c-1-1-dd"></div> <div class="c c-1-2-d"></div> <div class="c c-1-2-dd"></div> <!-- row 2 --> <div class="c c-2-1-d"></div> <div class="c c-2-1-dd"></div> <div class="c c-2-2-d"></div> <div class="c c-2-2-dd"></div> <div class="c c-2-4-d"></div> <div class="c c-2-4-dd"></div> <!-- row 4 --> <div class="c c-4-2-d"></div> <div class="c c-4-2-dd"></div> <div class="c c-4-4-d"></div> <div class="c c-4-4-dd"></div> <div class="c c-4-5-d"></div> <div class="c c-4-5-dd"></div> <!-- row 5 --> <div class="c c-5-4-d"></div> <div class="c c-5-4-dd"></div> <div class="c c-5-5-d"></div> <div class="c c-5-5-dd"></div> <!-- strokes --> <div class="c-stroke-1"></div> <div class="c-stroke-2"></div> <div class="c-stroke-3"></div> </div> <!-- End Letter C --> <!-- Start Letter T --> <div class="letter"> <!-- row 1 --> <div class="t t-1-4-d"></div> <div class="t t-1-4-dd"></div> <div class="t t-1-5-d"></div> <div class="t t-1-5-dd"></div> <!-- row 2 --> <div class="t t-2-2-d"></div> <div class="t t-2-2-dd"></div> <div class="t t-2-3-d"></div> <div class="t t-2-3-dd"></div> <div class="t t-2-32-d"></div> <div class="t t-2-32-dd"></div> <div class="t t-2-4-d"></div> <div class="t t-2-4-dd"></div> <div class="t t-2-5-d"></div> <div class="t t-2-5-dd"></div> <!-- row 4 --> <div class="t t-4-3-d"></div> <div class="t t-4-3-dd"></div> <div class="t t-4-32-d"></div> <div class="t t-4-32-dd"></div> <!-- strokes --> <div class="t-stroke-1"></div> </div> <!-- End Letter T --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> </div>');
	$(".grid-2").prepend('<div class="group-2"> <div class="background"> <a id="link-1" href="https://teo-pencheva.github.io/interactivemedia/projects/CSSTypeface/files/cssTypeface.html">CSS Typeface</a><br><br> <a id="link-1" href="https://teo-pencheva.github.io/interactivemedia/projects/poster/files/typographicPoster.html">Web Typographic Poster</a><br><br> <a id="link-1" href="https://teo-pencheva.github.io/interactivemedia/projects/interactiveElements/files/interactiveElements.html">Interactive Elements</a> </div> </div>');
}

// MIDDLE
function middleInfo() {
	$(".grid-1").prepend('<div class="group-3-ex"> <p id="heading">Exercise 1: Self-portrait</p> <p>In this exercise, I had to find an online tool to create a self-portrait that would act as an icebreaker in introducing myself to the class.</p> <p id="heading">Exercise 2: CSS Flags</p> <p>In this exercise, I had to create 5 flags using only HTML and CSS, one of which I had to design on my own.</p> <p id="heading">Exercise 3: CSS Fonts & Animation</p> <p>In this exercise, I was tasked to use three action words, each with a different font, and animate them through CSS to recreate the action that they state.</p> <p id="heading">Exercise 4: iFrames</p> <p>In this exercise, I was asked to make a composition of 5 iFrames that relate to one theme, but the elements must be presented in an unconventional and expressive manner.</p> <p id="heading">Exercise 5: Element Inspector</p> <p>In this exercise, I visited a pre-existing website and used the inspect tool to edit the content and make it about myself.</p> <p id="heading">Exercise 6: UI Style Guide</p> <p>In this exercise, I was asked to create or find a pre-existing UI style guide and create a single page site where the visual elements are all laid out.</p> </div>');
	$(".grid-1").prepend('<div class="group-1"> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter X --> <div class="letter"> <!-- row 5 --> <div class="x x-5-1-d"></div> <div class="x x-5-1-dd"></div> <div class="x x-5-2-d"></div> <div class="x x-5-2-dd"></div> <!-- left diagonal line --> <div class="x x-ld-1-d"></div> <div class="x x-ld-1-dd"></div> <div class="x x-ld-2-d"></div> <div class="x x-ld-2-dd"></div> <div class="x x-ld-3-d"></div> <div class="x x-ld-3-dd"></div> <div class="x x-ld-4-d"></div> <div class="x x-ld-4-dd"></div> <div class="x x-ld-5-d"></div> <div class="x x-ld-5-dd"></div> <div class="x x-ld-6-d"></div> <div class="x x-ld-6-dd"></div> <!-- right diagonal line --> <div class="x x-rd-1-d"></div> <div class="x x-rd-1-dd"></div> <div class="x x-rd-2-d"></div> <div class="x x-rd-2-dd"></div> <div class="x x-rd-3-d"></div> <div class="x x-rd-3-dd"></div> <div class="x x-rd-4-d"></div> <div class="x x-rd-4-dd"></div> <div class="x x-rd-5-d"></div> <div class="x x-rd-5-dd"></div> <div class="x x-rd-6-d"></div> <div class="x x-rd-6-dd"></div> </div> <!-- End Letter X --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter C --> <div class="letter"> <!-- row 1 --> <div class="c c-1-1-d"></div> <div class="c c-1-1-dd"></div> <div class="c c-1-2-d"></div> <div class="c c-1-2-dd"></div> <!-- row 2 --> <div class="c c-2-1-d"></div> <div class="c c-2-1-dd"></div> <div class="c c-2-2-d"></div> <div class="c c-2-2-dd"></div> <div class="c c-2-4-d"></div> <div class="c c-2-4-dd"></div> <!-- row 4 --> <div class="c c-4-2-d"></div> <div class="c c-4-2-dd"></div> <div class="c c-4-4-d"></div> <div class="c c-4-4-dd"></div> <div class="c c-4-5-d"></div> <div class="c c-4-5-dd"></div> <!-- row 5 --> <div class="c c-5-4-d"></div> <div class="c c-5-4-dd"></div> <div class="c c-5-5-d"></div> <div class="c c-5-5-dd"></div> <!-- strokes --> <div class="c-stroke-1"></div> <div class="c-stroke-2"></div> <div class="c-stroke-3"></div> </div> <!-- End Letter C --> <!-- Start Letter I --> <div class="letter"> <!-- row 1 --> <div class="i i-1-4-d"></div> <div class="i i-1-4-dd"></div> <div class="i i-1-5-d"></div> <div class="i i-1-5-dd"></div> <!-- row 2 --> <div class="i i-2-2-d"></div> <div class="i i-2-2-dd"></div> <div class="i i-2-3-d"></div> <div class="i i-2-3-dd"></div> <div class="i i-2-32-d"></div> <div class="i i-2-32-dd"></div> <div class="i i-2-4-d"></div> <div class="i i-2-4-dd"></div> <div class="i i-2-5-d"></div> <div class="i i-2-5-dd"></div> <!-- row 4 --> <div class="i i-4-2-d"></div> <div class="i i-4-2-dd"></div> <div class="i i-4-3-d"></div> <div class="i i-4-3-dd"></div> <div class="i i-4-32-d"></div> <div class="i i-4-32-dd"></div> <div class="i i-4-4-d"></div> <div class="i i-4-4-dd"></div> <div class="i i-4-5-d"></div> <div class="i i-4-5-dd"></div> <!-- row 5 --> <div class="i i-5-4-d"></div> <div class="i i-5-4-dd"></div> <div class="i i-5-5-d"></div> <div class="i i-5-5-dd"></div> <!-- strokes --> <div class="i-stroke-1"></div> </div> <!-- End Letter I --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> </div>');
	$(".grid-2").prepend('<div class="group-2"> <div class="background"> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise1/e1.html">Exercise 1: Self-portrait</a><br> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise2/e2.html">Exercise 2: CSS Flags</a><br> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise3/e3.html">Exercise 3: CSS Fonts & Animation</a><br> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise4/e4.html">Exercise 4: iFrames</a><br> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise5/e5.html">Exercise 5: Element Inspector</a><br> <a id="link-2" href="https://teo-pencheva.github.io/interactivemedia/exercises/exercise6/e6.html">Exercise 6: UI Style Guide</a> </div> </div>');
}

// RING
function ringInfo() {
	$(".grid-1").prepend('<div class="group-3-sh"> <p>Throughout this course, required readings were given out, after which we were tasked to answer 2-3 questions regarding the specific article. These are the following readings we had to complete:<br><br><br>1. Michael Goldstein - How to Crit<br>2. Frank Chimero - What Screens Want<br>3. Olia Lialina - Turing Complete User<br>4. Laurel Schwulst - My website is a shifting house next to a river of knowledge. What could yours be?<br>5. Mindy Seu - Poetry of Tools</p> </div>');
	$(".grid-1").prepend('<div class="group-1"> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter A --> <div class="letter"> <!-- row 1 --> <div class="a a-1-1-d"></div> <div class="a a-1-1-dd"></div> <div class="a a-1-2-d"></div> <div class="a a-1-2-dd"></div> <!-- row 2 --> <div class="a a-2-1-d"></div> <div class="a a-2-1-dd"></div> <div class="a a-2-2-d"></div> <div class="a a-2-2-dd"></div> <div class="a a-2-4-d"></div> <div class="a a-2-4-dd"></div> <!-- row 2.5 --> <div class="a a-22-2-d"></div> <div class="a a-22-2-dd"></div> <div class="a a-22-4-d"></div> <div class="a a-22-4-dd"></div> <!-- below row 2.5 --> <div class="a a-32-2-d"></div> <div class="a a-32-2-dd"></div> <div class="a a-32-4-d"></div> <div class="a a-32-4-dd"></div> <!-- row 4 --> <div class="a a-4-1-d"></div> <div class="a a-4-1-dd"></div> <div class="a a-4-5-d"></div> <div class="a a-4-5-dd"></div> <!-- row 5 --> <div class="a a-5-4-d"></div> <div class="a a-5-4-dd"></div> <div class="a a-5-5-d"></div> <div class="a a-5-5-dd"></div> <!-- strokes --> <div class="a-stroke-1"></div> <div class="a-stroke-2"></div> </div> <!-- End Letter A --> <!-- Start Letter D --> <div class="letter"> <!-- row 1 --> <div class="d d-1-1-d"></div> <div class="d d-1-1-dd"></div> <div class="d d-1-2-d"></div> <div class="d d-1-2-dd"></div> <!-- row 2 --> <div class="d d-2-1-d"></div> <div class="d d-2-1-dd"></div> <div class="d d-2-4-d"></div> <div class="d d-2-4-dd"></div> <!-- row 4 --> <div class="d d-4-2-d"></div> <div class="d d-4-2-dd"></div> <div class="d d-4-4-d"></div> <div class="d d-4-4-dd"></div> <div class="d d-4-5-d"></div> <div class="d d-4-5-dd"></div> <!-- row 5 --> <div class="d d-5-4-d"></div> <div class="d d-5-4-dd"></div> <div class="d d-5-5-d"></div> <div class="d d-5-5-dd"></div> <!-- strokes --> <div class="d-stroke-1"></div> <div class="d-stroke-2"></div> <div class="d-stroke-3"></div> <div class="d-stroke-4"></div> </div> <!-- End Letter D --> <!-- Start Letter I --> <div class="letter"> <!-- row 1 --> <div class="i i-1-4-d"></div> <div class="i i-1-4-dd"></div> <div class="i i-1-5-d"></div> <div class="i i-1-5-dd"></div> <!-- row 2 --> <div class="i i-2-2-d"></div> <div class="i i-2-2-dd"></div> <div class="i i-2-3-d"></div> <div class="i i-2-3-dd"></div> <div class="i i-2-32-d"></div> <div class="i i-2-32-dd"></div> <div class="i i-2-4-d"></div> <div class="i i-2-4-dd"></div> <div class="i i-2-5-d"></div> <div class="i i-2-5-dd"></div> <!-- row 4 --> <div class="i i-4-2-d"></div> <div class="i i-4-2-dd"></div> <div class="i i-4-3-d"></div> <div class="i i-4-3-dd"></div> <div class="i i-4-32-d"></div> <div class="i i-4-32-dd"></div> <div class="i i-4-4-d"></div> <div class="i i-4-4-dd"></div> <div class="i i-4-5-d"></div> <div class="i i-4-5-dd"></div> <!-- row 5 --> <div class="i i-5-4-d"></div> <div class="i i-5-4-dd"></div> <div class="i i-5-5-d"></div> <div class="i i-5-5-dd"></div> <!-- strokes --> <div class="i-stroke-1"></div> </div> <!-- End Letter I --> <!-- Start Letter N --> <div class="letter"> <!-- row 1 --> <div class="n n-1-4-d"></div> <div class="n n-1-4-dd"></div> <div class="n n-1-5-d"></div> <div class="n n-1-5-dd"></div> <!-- row 2 --> <div class="n n-2-5-d"></div> <div class="n n-2-5-dd"></div> <!-- row 4 --> <div class="n n-4-1-d"></div> <div class="n n-4-1-dd"></div> <div class="n n-4-4-d"></div> <div class="n n-4-4-dd"></div> <!-- diagonal line --> <div class="n n-d-1-d"></div> <div class="n n-d-1-dd"></div> <div class="n n-d-2-d"></div> <div class="n n-d-2-dd"></div> <div class="n n-d-3-d"></div> <div class="n n-d-3-dd"></div> <div class="n n-d-4-d"></div> <div class="n n-d-4-dd"></div> <div class="n n-d-5-d"></div> <div class="n n-d-5-dd"></div> <!-- strokes --> <div class="n-stroke-1"></div> <div class="n-stroke-2"></div> </div> <!-- End Letter N --> <!-- Start Letter G --> <div class="letter"> <!-- row 1 --> <div class="g g-1-1-d"></div> <div class="g g-1-1-dd"></div> <div class="g g-1-2-d"></div> <div class="g g-1-2-dd"></div> <!-- row 2 --> <div class="g g-2-1-d"></div> <div class="g g-2-1-dd"></div> <div class="g g-2-2-d"></div> <div class="g g-2-2-dd"></div> <div class="g g-2-4-d"></div> <div class="g g-2-4-dd"></div> <!-- row 3 --> <div class="g g-3-2-d"></div> <div class="g g-3-2-dd"></div> <!-- row 4 --> <div class="g g-4-1-d"></div> <div class="g g-4-1-dd"></div> <div class="g g-4-2-d"></div> <div class="g g-4-2-dd"></div> <div class="g g-4-4-d"></div> <div class="g g-4-4-dd"></div> <div class="g g-4-4-o-d"></div> <div class="g g-4-4-o-dd"></div> <!-- row 5 --> <div class="g g-5-1-d"></div> <div class="g g-5-1-dd"></div> <div class="g g-5-2-d"></div> <div class="g g-5-2-dd"></div> <!-- strokes --> <div class="g-stroke-1"></div> <div class="g-stroke-2"></div> <div class="g-stroke-3"></div> <div class="g-stroke-4"></div> </div> <!-- End Letter G --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> </div>');
	$(".grid-2").prepend('<div class="group-2"> <div class="background"> <a id="link-3" href="https://teo-pencheva.github.io/interactivemedia/readings/reading1/r1.html">Reading 1</a><br><br> <a id="link-3" href="https://teo-pencheva.github.io/interactivemedia/readings/reading2/r2.html">Reading 2</a><br><br> <a id="link-3" href="https://teo-pencheva.github.io/interactivemedia/readings/reading3/r3.html">Reading 3</a><br><br> <a id="link-3" href="https://teo-pencheva.github.io/interactivemedia/readings/reading4/r4.html">Reading 4</a><br><br> <a id="link-3" href="https://teo-pencheva.github.io/interactivemedia/readings/reading5/r5.html">Reading 5</a> </div> </div>');
}

// PINKY
function pinkyInfo() {
	$(".grid-1").prepend('<div class="group-3-sh"> <p>During this course, I used plenty of resources to aid me in both my studies and my projects. For specific resources I used in my projects, I have recorded the links and descriptions at the beginning of their respected javascript files. To the side, I have listed some websites that have continuously helped me with my coursework.<br>Additionally, process work was heavily valued where I was asked to list pieces of work that were influential in my creation of projects. Thus, I want to list a few resources from which I have gathered plenty of inspiration:<br></p><br> <a href="https://www.instagram.com/">Instagram</a><br> <a href="https://www.awwwards.com/">Awwwards</a><br> <a href="https://www.tumblr.com/">Tumblr</a><br> <a href="https://dribbble.com/">Dribbble</a><br> <a href="https://freefrontend.com/">Free Frontend</a> </div>');
	$(".grid-1").prepend('<div class="group-1"> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> <!-- Start Letter O --> <div class="letter"> <!-- row 1 --> <div class="o o-1-4-d"></div> <div class="o o-1-4-dd"></div> <div class="o o-1-5-d"></div> <div class="o o-1-5-dd"></div> <!-- row 2 --> <div class="o o-2-2-d"></div> <div class="o o-2-2-dd"></div> <div class="o o-2-4-d"></div> <div class="o o-2-4-dd"></div> <div class="o o-2-5-d"></div> <div class="o o-2-5-dd"></div> <!-- row 4 --> <div class="o o-4-1-d"></div> <div class="o o-4-1-dd"></div> <div class="o o-4-2-d"></div> <div class="o o-4-2-dd"></div> <div class="o o-4-4-d"></div> <div class="o o-4-4-dd"></div> <!-- row 5 --> <div class="o o-5-1-d"></div> <div class="o o-5-1-dd"></div> <div class="o o-5-2-d"></div> <div class="o o-5-2-dd"></div> <!-- strokes --> <div class="o-stroke-1"></div> <div class="o-stroke-2"></div> <div class="o-stroke-3"></div> <div class="o-stroke-4"></div> </div> <!-- End Letter O --> <!-- Start Letter U --> <div class="letter"> <!-- row 1 --> <div class="u u-1-4-d"></div> <div class="u u-1-4-dd"></div> <div class="u u-1-5-d"></div> <div class="u u-1-5-dd"></div> <!-- row 2 --> <div class="u u-2-1-d"></div> <div class="u u-2-1-dd"></div> <div class="u u-2-4-d"></div> <div class="u u-2-4-dd"></div> <div class="u u-2-5-d"></div> <div class="u u-2-5-dd"></div> <!-- row 4 --> <div class="u u-4-1-d"></div> <div class="u u-4-1-dd"></div> <div class="u u-4-2-d"></div> <div class="u u-4-2-dd"></div> <div class="u u-4-4-d"></div> <div class="u u-4-4-dd"></div> <!-- row 5 --> <div class="u u-5-1-d"></div> <div class="u u-5-1-dd"></div> <div class="u u-5-2-d"></div> <div class="u u-5-2-dd"></div> <!-- strokes --> <div class="u-stroke-1"></div> <div class="u-stroke-2"></div> <div class="u-stroke-3"></div> </div> <!-- End Letter U --> <!-- Start Letter R --> <div class="letter"> <!-- row 1 --> <div class="r r-1-4-d"></div> <div class="r r-1-4-dd"></div> <div class="r r-1-5-d"></div> <div class="r r-1-5-dd"></div> <!-- row 2 --> <div class="r r-2-2-d"></div> <div class="r r-2-2-dd"></div> <div class="r r-2-4-d"></div> <div class="r r-2-4-dd"></div> <div class="r r-2-5-d"></div> <div class="r r-2-5-dd"></div> <!-- row 3 --> <div class="r r-3-2-d"></div> <div class="r r-3-2-dd"></div> <div class="r r-3-3-d"></div> <div class="r r-3-3-dd"></div> <!-- row 4 --> <div class="r r-4-1-d"></div> <div class="r r-4-1-dd"></div> <!-- diagonal line --> <div class="r r-d-1-d"></div> <div class="r r-d-1-dd"></div> <div class="r r-d-2-d"></div> <div class="r r-d-2-dd"></div> <div class="r r-d-3-d"></div> <div class="r r-d-3-dd"></div> <div class="r r-d-4-d"></div> <div class="r r-d-4-dd"></div> <!-- strokes --> <div class="r-stroke-1"></div> <div class="r-stroke-2"></div> <div class="r-stroke-3"></div> </div> <!-- End Letter R --> <!-- Start Letter C --> <div class="letter"> <!-- row 1 --> <div class="c c-1-1-d"></div> <div class="c c-1-1-dd"></div> <div class="c c-1-2-d"></div> <div class="c c-1-2-dd"></div> <!-- row 2 --> <div class="c c-2-1-d"></div> <div class="c c-2-1-dd"></div> <div class="c c-2-2-d"></div> <div class="c c-2-2-dd"></div> <div class="c c-2-4-d"></div> <div class="c c-2-4-dd"></div> <!-- row 4 --> <div class="c c-4-2-d"></div> <div class="c c-4-2-dd"></div> <div class="c c-4-4-d"></div> <div class="c c-4-4-dd"></div> <div class="c c-4-5-d"></div> <div class="c c-4-5-dd"></div> <!-- row 5 --> <div class="c c-5-4-d"></div> <div class="c c-5-4-dd"></div> <div class="c c-5-5-d"></div> <div class="c c-5-5-dd"></div> <!-- strokes --> <div class="c-stroke-1"></div> <div class="c-stroke-2"></div> <div class="c-stroke-3"></div> </div> <!-- End Letter C --> <!-- Start Letter E --> <div class="letter"> <!-- row 1 --> <div class="e e-1-1-d"></div> <div class="e e-1-1-dd"></div> <div class="e e-1-2-d"></div> <div class="e e-1-2-dd"></div> <!-- row 2 --> <div class="e e-2-1-d"></div> <div class="e e-2-1-dd"></div> <div class="e e-2-2-d"></div> <div class="e e-2-2-dd"></div> <div class="e e-2-4-d"></div> <div class="e e-2-4-dd"></div> <!-- row 3 --> <div class="e e-3-2-d"></div> <div class="e e-3-2-dd"></div> <div class="e e-32-2-d"></div> <div class="e e-32-2-dd"></div> <!-- row 4 --> <div class="e e-4-1-d"></div> <div class="e e-4-1-dd"></div> <div class="e e-4-2-d"></div> <div class="e e-4-2-dd"></div> <div class="e e-4-4-d"></div> <div class="e e-4-4-dd"></div> <!-- row 5 --> <div class="e e-5-1-d"></div> <div class="e e-5-1-dd"></div> <div class="e e-5-2-d"></div> <div class="e e-5-2-dd"></div> <!-- strokes --> <div class="e-stroke-1"></div> <div class="e-stroke-2"></div> <div class="e-stroke-3"></div> <div class="e-stroke-4"></div> </div> <!-- End Letter E --> <!-- Start Letter S --> <div class="letter"> <!-- row 1 --> <div class="s s-1-1-d"></div> <div class="s s-1-1-dd"></div> <div class="s s-1-2-d"></div> <div class="s s-1-2-dd"></div> <!-- row 2 --> <div class="s s-2-1-d"></div> <div class="s s-2-1-dd"></div> <div class="s s-2-2-d"></div> <div class="s s-2-2-dd"></div> <div class="s s-2-4-d"></div> <div class="s s-2-4-dd"></div> <!-- row 3 --> <div class="s s-3-2-d"></div> <div class="s s-3-2-dd"></div> <div class="s s-3-4-d"></div> <div class="s s-3-4-dd"></div> <!-- row 4 --> <div class="s s-4-2-d"></div> <div class="s s-4-2-dd"></div> <div class="s s-4-4-d"></div> <div class="s s-4-4-dd"></div> <div class="s s-4-5-d"></div> <div class="s s-4-5-dd"></div> <!-- row 5 --> <div class="s s-5-4-d"></div> <div class="s s-5-4-dd"></div> <div class="s s-5-5-d"></div> <div class="s s-5-5-dd"></div> <!-- strokes --> <div class="s-stroke-1"></div> <div class="s-stroke-2"></div> <div class="s-stroke-3"></div> </div> <!-- End Letter S --> </div>');
	$(".grid-2").prepend('<div class="group-2"> <div class="background"> <a id="link-4" href="https://www.w3schools.com/">W3Schools</a><br><br> <a id="link-4" href="https://stackoverflow.com/">stackoverflow</a><br><br> <a id="link-4" href="https://css-tricks.com/">CSS-tricks</a><br><br> <a id="link-4" href="https://developer.mozilla.org/">Developer-Modzilla</a><br><br> <a id="link-4" href="https://forum.jquery.com/">Jquery Forum</a> </div> </div>');
}

////// BACKUP
// function foreInfo() {
// 	$(".grid-1").prepend('');
// 	$(".grid-1").prepend('');
// 	$(".grid-2").prepend('');
// }



////// RESIZING IMAGE MAP
jQuery(function($) { //(2)
    $('map').imageMapResize();
});


console.log("Index");