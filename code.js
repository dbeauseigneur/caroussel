var timer

function suivante() {
	var image_vis = $(".normal");
	var image_cash;
	
		if (image_vis.hasClass("last")) {
			image_cach=$(".first");}
		else {
			image_cach=image_vis.next();
		}
		image_vis.addClass("cache");
		image_vis.removeClass("normal");
		image_cach.addClass("normal");
		image_cach.removeClass("cache");
		
	}

function precedente() {
	var image_vis = $(".normal");
	var image_cash;
	
		if (image_vis.hasClass("first")) {
			image_cach=$(".last");}
		else {
			image_cach=image_vis.prev();
		}
		image_vis.addClass("cache");
		image_vis.removeClass("normal");
		image_cach.addClass("normal");
		image_cach.removeClass("cache");
		
	}
	
function bouclage() {
	timer = setInterval(function(){
		suivante();
		}, 3000);
	}

$(document).ready(function() {
	

	$("#droite").on( "click", function( event ) {
		clearInterval(timer);
		suivante();
		bouclage;
	});
	
	$("#gauche").on( "click", function( event ) {
		clearInterval(timer);
		precedente();
		bouclage();
	});
	
	bouclage();
	
});


