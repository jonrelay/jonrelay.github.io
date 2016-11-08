$(function() {

showSlides(1);

    var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});


var blockTween = new TweenMax.to('#poppy', 1.5, {
    opacity: 0,
    top:50,
});

var scene = new ScrollMagic.Scene({triggerElement: "#scrollTrigger1", duration: 500})
						.setTween(blockTween)
						.addTo(controller);


var titleTween = new TweenMax.to('#title', 1.5, {
    opacity: 0,
    top:150,
});

var scene = new ScrollMagic.Scene({triggerElement: "#scrollTrigger1", duration: 500})
						.setTween(titleTween)
						.addTo(controller);


});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}