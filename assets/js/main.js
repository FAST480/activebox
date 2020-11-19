$(document).ready(function(){

	$(window).scroll(function(){
		var heightNav = $(".nav").outerHeight(),
			marginTopFromWindow = $(window).scrollTop();

		if(marginTopFromWindow >= heightNav){
			$(".nav").addClass("active");
			$(".header").css("padding-top", heightNav);
		}
		else{
			$(".nav").removeClass("active");
			$(".header").css("padding-top", 0);
		}
	});
});