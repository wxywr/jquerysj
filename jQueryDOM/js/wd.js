$(document).ready(function(){
	$(".one-a1 .btn1").click(function(){
		$(".one-a1 p:first").addClass("title");
	});
});

$(function(){
	$(".one-a2 .btn2").click(function(){
		$(".one-a2 p:first").addClass("title color");
	});
});

$(function(){
	$(".one-a3 .btn3").click(function(){
		$(".one-a3 p:first").removeClass("title").addClass("target");
	});
});

$(function(){
	$(".one-a4 .btn4").click(function(){
		$(".one-a4 p").addClass(function(a){
			return 'aa_'+ a;
		});
	});
});

$(function(){
	$(".one-b1 .btn5").click(function(){
		$(".one-b1 p").after("<p>Hello My Girl !</p>");
	});
});

$(function(){
	$(".one-b2 .btn6").click(function(){
		$(".one-b2 p").after(function(a){
			return"<p>Hello My Wife "+ a +"</p>";
		});
	});
});

$(function(){
	$(".one-c .btn7").click(function(){
		$(".one-c p").append("<p>Hello My Girl !</p>");
	});
});

$(function(){
	$(".one-d .btn8").click(function(){
		$("<p>Hello My Girl !</p>").appendTo(".one-d p");
	});
});

$(function(){
	$(".one-e1 .btn9").click(function(){
		$(".one-e1").append($(".one-e1 p").clone());
	});
});

$(function(){
	$(".one-e2 .btn10").click(function(){
		$(".one-e2").append($(".one-e2 p:first").clone(true));
	});
	$(".one-e2 p").click(function(){
		$("p").animate({fontSize:"+=1px"});
	});
});

$(function(){
	$(".one-f .btn11").click(function(){
		$(".one-f p").detach();
	});
});

$(function(){
	$(".one-g .btn12").click(function(){
		$(".one-g p").empty();
	});
});

$(function(){
	$(".one-i .btn13").click(function(){
		$("<span>Hello!</span>").insertAfter("p");
	});
});

$(function(){
	$(".one-j .btn14").click(function(){
		$(".one-j p").prepend("<b>Hello Word</b>");
	});
});


$(function(){
	$(".one-k .btn15").click(function(){
		$(".one-k p").removeAttr("style");
	});
});

$(function(){
	$(".one-l .btn16").click(function(){
		$(".one-l p").replaceWith("<b>Hello Word!</b>");
	});
});

$(function(){
	$(".one-m .btn17").click(function(){
		$(".one-m p").text(function(x){
			return"这个 p 元素的 index 是:" + x;
		});
	});
});

$(function(){
	$(".one-n .btn18").click(function(){
		$(".one-n p").toggleClass("mina");
	});
});

$(function(){
	$(".one-o .btn19").click(function(){
		$(".one-o p").unwrap();
	});
});

$(function(){
	$(".one-p .btn01").click(function(){
		$(".one-p p").wrap("<table></table>");
	});
});

$(function(){
	$(".one-q .btn02").click(function(){
		$(".one-q p").wrapAll("<tr></tr>");
	});
});