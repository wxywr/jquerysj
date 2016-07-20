$(document).ready(function(){
	$(".one .btn1").click(function(){
		$(".one p").slideToggle();
	});
});

$(function(){
	$(".two :input").focus(function(){
		$(".two :input").css("background","red");});

	$(".two :input").blur(function(){
		$(".two :input").css("background","#707070");
	});
});

$(function(){
	$(".three .top").change(function(){
		$(this).css("background","aqua");
	});
});

$(function(){
	$(".four .btn2").click(function(){
		$(".four p").slideToggle();
	});
});

$(function(){
	$(".five .btn3").dblclick(function(){
		$(".five p").slideToggle();
	});
});

$(function(){
	$(".six").delegate(".btn4","click",function(){
		$(".six p").slideToggle(3000);
		$(".six p,.six em").css("color","red")
	});
});

$(function(){
	$(document).mousemove(function(e){
		$("span").text("X: " + e.pageX + ", Y: " + e.pageY);
	});
});

$(function(){
	$(".btn5").click(function(e){
		return("最后一次点击鼠标的位置是： X" +e.pageX + ", Y" +e.pageY);
	});
	$(".btn5").click(function(e){
		$(".eight p").html(e.result);
		$(".eight p").css("color","red");
	});
});

$(function(){
	$("em, h1, h4, p, .btn6").click(function(event){
		$(".nine").html("点击事件由一个 " +event.target.nodeName + "元素触发");
	});
});

$(function(){
	$(".ten :input").keydown(function(){
		$(".ten :input").css("background","#f60");
	});
	$(".ten :input").keyup(function(){
		$(".ten :input").css("background","#e8e8e8");
	});
});

$(function(){
	$(".one-a p").mouseenter(function(){
		$(".one-a p").css("background","aqua");
	});
	$(".one-a p").mouseleave(function(){
		$(".one-a p").css("background","#e8e8e8");
	});
});

$(function(){
	$(".one-b p").mouseover(function(){
		$(".one-b p").css("background","red");
	});
	$(".one-b p").mouseout(function(){
		$(".one-b p").css("background","#e0e0e0");
	});
});

$(function(){
	$(".one-c p, .one-c em").one("click",function(){
	$(this).animate({fontSize:"+=9px"});
	$(".one-c p").css("color","red");
	});
});

$(function(){
	$(".one-d .thead").submit(function(e){
		alert("Submitted");
	});
});

$(function(){
	$(".one-e .btn7").toggle(function(){
		$(".one-e").css("background","blue");},
		function(){
		$(".one-e").css("background","red");},
		function(){
		$(".one-e").css("background","#f60");
		});
});

$(function(){
	$(".one-f :input").select(function(){
		$(".one-f :input").after("文本被选中！");
	});
	$(".one-f .btna").click(function(){
		$(".one-f :input").trigger("select");
	});
});

$(function(){
	$(".one-g", window).unload(function(){
		alert("再见！");
	});
});