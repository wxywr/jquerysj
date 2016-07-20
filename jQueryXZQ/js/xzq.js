$(document).ready(function(){
	$("#no *").css("background","aqua");
	});

$(function(){
	$("#hi").css("background","#ccc");
});

$(function(){
	$(".hi").css("background","red");
});

$(function(){
	$("#one ul").css("background","green");
});

$(function(){
	$("#two p:first").css("background","yellow");
});

$(function(){
	$("#three p:last").css("background","blue");
});

$(function(){
	$(".os tr:even").css("background","aqua");
});

$(function(){
	$(".qs tr:odd").css("background","#f60");
});

$(function(){
	$("#yei li:eq(2)").css("background","red");
});

$(function(){
	$(".you tr:gt(3)").css("background","#444");
});

$(function(){
	$(".yo tr:lt(2)").css("background","#666");
});

$(function(){
	$(".pro :header").css("background","#B2E0FF");});

$(function(){
	function aniDiv(){
		$(".box").animate({width:800},4000);
		$(".box").animate({width:200},"slow",aniDiv);}
	aniDiv();$(".btn1").click(function(){
		$(":animated").css("background","red");
	});
});

$(function(){
	$(".p p:contains(p)").css("background","#b2e0ff");
});

$(document).ready(function(){
    $(":empty").css("background-color","#B2E0FF");
});

$(function(){
	$("#jd :empty").css("background","#B2E0FF");});

$(function(){
	$(".aa [id]").css("background","green");
});

$(function(){
	$("#green :visible").css("background","#333");
});

$(function(){
	$(".wang [id=wo]").css("background","#b80000");
});

$(function(){
	$(".qq [id!=wrap_header]").css("background","#0f3");
});

$(function(){
	$(".wx [id$=header").css("background","#630");
});

$(function(){
	$(".tel :input").css("background","green");
});

$(function(){
	$(".logo :text").css("background","red");
});

$(function(){
	$(".title :password").css("background","#ccc");
});

$(function(){
	$(".btn3").click(function(){
		$(".banner :checkbox").hide();
	});
});

$(function(){
	$(".news :submit").css("background","red");
});

$(function(){
	$(".link :Reset").css("background","red");
});

$(function(){
	$(".map :image").css("background","#fff");
});

$(function(){
	$(".last :file").css("background","aqua");
});

$(function(){
	$(".icon :enabled").css("background","red");
});

$(function(){
	$(".panel :disabled").css("background","red");
});

$(function(){
	$(".btn0").click(function(){
		$(":selected").hide();
	});
});

$(function(){
	$(".btn9").click(function(){
		$(".first :checked").hide();
	});
});