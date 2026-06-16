$(document).ready(function(){
	// start header section
	// start banner
	// end banner
	// end header section

	//start info section
	$(window).scroll(function(){
		let getscrollpoint=$(this).scrollTop();
		console.log(getscrollpoint);

		if(getscrollpoint >=220){
			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");			
		}
	});
	//end info section

	// start adv section
	$("videos").click(function(){
		var getmodal=$(this).data("bs-target");
		var getvideosrc=$(this).data("video");
		var videourlwithauto=getvideosrc+"?autoplay=1"
		$(getmodal + " iframe").attr("src".videourlwithauto)
		$(getmodal + " butto.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});
		$(getmodal).click("hidden.bs.modal",function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		})
	});
	// end adv section

	//start premises section
	$("#lightslider").lightSlider({
		item:4,
		// auto:true,
        loop:true,
        slideMove:1,
        speed:600
	}).play();
	//end premises section

	//start pricing section
	$(window).scroll(function(){
		let getscroll=$(this).scrollTop();
		if(getscroll >=2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");

		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
	});
	//end pricing section

	//start join us section
	$("#accordion").accordion();
	//end join us section

	//start footer section
	$("#getyear").text(new Date().getUTCFullYear());
	// end footer section

	//start progress
	$(window).scroll(function(){
		var getprogress =$("#progress");
		var getprogressval= $("#progressvalues");
		var getscrolltop=$(this).scrollTop();
		console.log(getscrolltop);

//By jQuery
		// st * 100 / (pjheight - currentviewhieght)
		// var getscrollheight=$(document).height();
		// // console.log(getscrollheight);
		// var getclientheight=$(window).height();
		// // console.log(getclientheight);
		// var calcheight=getscrollheight - getclientheight;
		// var getfinalheight=Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheight);
//By Javascript
		var getscrollheight=document.documentElement.scrollHeight;
		console.log(getscrollheight);
		var getclientheight=document.documentElement.clientHeight;
		console.log(getclientheight);
		var calcheight=getscrollheight - getclientheight;
		var getfinalheight=Math.round(getscrolltop * 100 / calcheight);
		console.log(getfinalheight);

		getprogressval.text(`${getfinalheight}%`);

		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%`
		})
	})
	//end progress
});