$(document).ready(function(){
	$(".btn").click("p",function(){
		$("p").css("background","red");
	});
});

$(document).ready(function(){
	$(".btn1").click(function(){
		$("#box").fadeIn();
		$("#box1").fadeIn("slow");
		$("#box2").fadeIn(3000);
	});
});

$(document).ready(function(){
	$(".btn2").click(function(){
		$("#pro").fadeOut(1000);
		$("#pro1").fadeOut("slow")
		$("#pro2").fadeOut(3000);
	});
});

$(document).ready(function(){
	$(".btn3").click(function(){
		$("#wrap").fadeToggle();
		$("#wrap1").fadeToggle("slow");
		$("#wrap2").fadeToggle(3000);
	});
});

$(document).ready(function(){
	$(".btn4").click(function(){
		$("#logo").fadeTo("slow",0.15);
		$("#logo1").fadeTo("slow",0.4);
		$("#logo2").fadeTo("slow",0.7);
	});
});

$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideDown(3000);
	});
});	

$(document).ready(function(){
	$(".flip").click(function(){
		$(".panel").slideUp("slow");
	});
});

$(document).ready(function(){
	$(".flipa").click(function(){
		$("#pane").slideToggle(2000);
	});
});

$(document).ready(function(){
	$(".btnA").click(function(){
		$(".map").slideToggle(3000);
	});
});

$(document).ready(function(){
	$(".btnb").click(function(){
		var div=$("#float");
		div.animate({left:'800px'},"slow");
		div.animate({fontSize:'2em'},2000);
	});
});

$(document).ready(function(){
	$(".btnc").click(function(){
		var div=$("#icon");
		div.animate({height:'500px',opacity:'0.3'},3000);
    div.animate({width:'500px',opacity:'1'},3000);
    div.animate({height:'200px',opacity:'0.3'},"slow");
    div.animate({width:'200px',opacity:'1'},"slow");
	});
});

$(document).ready(function(){
	$(".btnd").click(function(){
		$("#toggle").animate({height:'toggle'});
	});
});

$(document).ready(function(){
	$(".btne").click(function(){
		$("#hot").animate({
			left:'300px',height:'+=50px',width:'+=200px'
		});
	});
});

$(document).ready(function(){
	$(".btnf").click(function(){
		$("#title").animate({
			left:'500px',opacity:'0.3',height:'500px',width:'500px'
		});
	});
});

$(document).ready(function(){
	$(".btng").click(function(){
		$("#thead").animate({left:'800px'});
	});
});

$(document).ready(function(){
	$(".panelf").click(function(){
		$("#banner").slideToggle(2000);
	});
	$(".stop").click(function(){
		$("#banner").stop();
	});
});

$(document).ready(function(){
	$(".btn6").click(function(){
		$("#file").css("color","red")
				.slideToggle(1000)
				.slideDown(2000);
	});
});

$(document).ready(function(){
	$(".btn7").click(function(){
		$("#txt").hide(1000,function(){
			alert("该段落现在被隐藏");
		});
	});
});