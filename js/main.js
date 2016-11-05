$(function() {
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
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);


var titleTween = new TweenMax.to('#title', 1.5, {
    opacity: 0,
    top:150,
});

var scene = new ScrollMagic.Scene({triggerElement: "#scrollTrigger1", duration: 500})
						.setTween(titleTween)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);


});