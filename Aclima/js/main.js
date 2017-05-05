$(function(){
//	фиксированое меню
	
	$(window).on("scroll", function(){
		var menu = $(".header-fix"), begin = $(".s1").height();
		var menuH = menu.outerHeight();
		if ($(this).scrollTop() > begin && !menu.hasClass("scrolled"))        
			if (screen.width > '991' && $(window).width() > '991'){
				menu.addClass("scrolled");
				$(".s1").css({"marginBottom": menuH});	
			}			
		if ($(this).scrollTop() <= begin && menu.hasClass("scrolled")){
			menu.removeClass("scrolled");
			$(".s1").removeAttr("style");
		} 		
	});
	
	//	правое меню	- фикс
	$(".menur-menus>ul:first>li>a").each(function(){
		$(this).addClass("clearfix");
	});
	
	//	правое меню	- разворачивание
	(function(){
		var menu = $(".menur"), menuW = menu.width();
		$(".header-menu-btn").on("click", function(){
			if (parseInt(menu.css("right")) < 0){
				menu.css("right", 0);
				$(".menur-overlay").addClass("menur-open");
			}
//			else{
//				menu.css("right", -menuW);
//				$(".menur-overlay").removeClass("menur-open");
//			} 
		});
		$(".menur-close-btn, .menur-overlay").on("click", function(){
			menu.css("right", -menuW);
			$(".menur-overlay").removeClass("menur-open");
		});	
	})();
	
	//	хедер-меню - списки
	$(".header-phones-list>li>a").on("click", function(){
		var numb = $(this).text();
		$(".header-phone>span").text(numb);
		phones.slideUp();
	});		
	$(".header-lang-list>li>a").on("click", function(){
		var lng = $(this).text();
		$(".header-lang-switch").text(lng);	
		lngs.slideUp();
	});		
	var phones = $(".header-phones-list");
	$(".header-phones").hover(
		function(){	if (!phones.is(":visible"))	phones.slideDown();	},
		function(){ if (phones.is(":visible")) phones.slideUp(); }	
	);	
	var lngs = $(".header-lang-list");
	$(".header-lang").hover(
		function(){	if (!lngs.is(":visible")) lngs.slideDown();	},
		function(){ if (lngs.is(":visible")) lngs.slideUp(); }	
	);
	
	//	s4 - подстановка картинок по категориям	
	$(".s4-menu>li:even>a").hover(
		function(){
			$(".s4-left-img>img").attr("src", "img/s4/s4-bg.png");
		}, function(){}
	);
	$(".s4-menu>li:odd>a").hover(
		function(){
			$(".s4-left-img>img").attr("src", "img/s4/s4-bg-2.png");
		}, function(){}
	);
	
	//	подстановка картинок в s4 по клику на лого 		
	$(".s3-brand").on("click", function(e){
		e.preventDefault();
		var imgSrc = $(this).find("img").attr("src");
		$(".s4-brand-tag>img").attr("src", imgSrc);		
		$(".s3-brand").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
	
	//	центрируем по высоте маркер 
	$(".sec-top").each(function(){
		$(this).css("line-height", $(this).css("height"));
	});	
	
	//	вывод новостей и объектов - фикс
	$(".news-blocks>div:nth-child(4n), .obj-blocks>div:nth-child(4n)")
		.after("<div class='clearfix'></div>");


	// выводим карту в модальном окне
	if ($(".s13").length)
	$(".s13-contacts-block:first-child>.s13-contact-link").magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	
	

});

$(window).load(function(){
	//	переход к след блоку по клику на маркер
	$("section:not('.s1') .sec-top>i").on("click", function(){
		var block = $(this).parents("section").next();
		var offset = $(block).offset().top;
		$("html, body").animate({scrollTop: offset - 69}, 500);
	});		
	$(".s1 .sec-top>i").on("click", function(){
		var offset = $(".header-fix").offset().top;
		$("html, body").animate({scrollTop: offset}, 500);
	});
	
	//	высота заливки новости (hover)
	$(".news-block").each(function(){
		var bg = $(this).find(".news-block-bg");
		bg.css("height", $(this).outerHeight());
	});
	
	//	положение белой полосы в s11 	
	if ($(".s11").length){
		var el = $(".news-blocks>.clearfix + div"), elH = el.offset().top + 129;
		$(".news-main-bg").css({"top": elH+"px", "display": "block"});
	}
});