$(function(){
	$(".s1-slider").slick({	slidesToShow: 1	});	
	
	$(".s2-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});		
	$(".s7-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});	
	
	$(".s3-slider").slick({	slidesToShow: 1	});
	
	$(".s4-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});	

	$("#time-1").ionRangeSlider({
		min: 1,
		max: 120,
		from: 5,
		step: 1,
		postfix: " дн."
	});
	$("#time-2").ionRangeSlider({
		min: 1,
		max: 120,
		from: 7,
		step: 1,
		postfix: " ч."
	});
	
	$("#range-1").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 10,
		from: 4,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(1) .irs-single").text();
			$(".s8-range-box:nth-child(1) .s8-range-value").text(val);
		}
	});
	$("#range-2").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 10,
		from: 4,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(2) .irs-single").text();
			$(".s8-range-box:nth-child(2) .s8-range-value").text(val);
		}
	});
	$("#range-3").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 100,
		from: 80,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(3) .irs-single").text();
			$(".s8-range-box:nth-child(3) .s8-range-value").text(val);
		}
	});


	(function(){
		function zoom(){
			var el = $("#viewport"),
				ww = window.screen.width, mw = 580, ratio = ww/mw;
			if (ww<mw){ 
				el.attr('content', 'initial-scale='+ratio+', maximum-scale='+ratio+', minimum-scale='+ratio+', user-scalable=no, width='+mw);
			} else {
				el.attr('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width='+ ww);
			}
		}
		window.addEventListener('resize', function(){ zoom(); });
		zoom();
	}());
	
	// яндекс карта
	if($("#map").length){		
		ymaps.ready(init);
		var myMap, myPlacemark;
		function init(){     
			myMap = new ymaps.Map("map", {
				center: [55.76707457, 37.56832700],
				zoom: 16,
				controls: []
			});
			myPlacemark = new ymaps.Placemark([55.76717457, 37.57132700], {
				iconCaption: 'Малая Грузинская ул., 27/13'
			},{
				preset: 'islands#redDotIconWithCaption'			
			});		
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom'); 	
		}
	}

});


