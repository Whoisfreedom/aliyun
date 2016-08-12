
$(".nav-ul li").mouseenter(function(){
	$(this).children("div").slideDown();
});
$(".nav-ul li").mouseleave(function(){
	$(this).children("div").slideUp();
});
$(".banner .w1200 .b").eq(0).animate({opacity:"1",top:"20px"},500);
$.fn.extend({
	banner : function(){
		var _this = this;
		var i =0;
		_this._change(i);
		$(".indicator a").click(function(){
			clearTimeout(play);
			var index = $(this).index();
			_this._teb(index);
			i=index;
			_this._change(i);
		})

	},
	_teb : function(_index){
			$(".indicator a").eq(_index).addClass("currnt").siblings().removeClass("currnt");
			$(".banner .banner0").eq(_index).addClass("xianshi").siblings().removeClass("xianshi");
			$(".banner .w1200 .b").eq(_index).animate({opacity:"1",top:"20px"},500);
			$(".banner .w1200 .b").eq(_index).siblings().css({"opacity":"0","top":"0px"});
	},
	_change : function(i){ 
		var _this = this;
		play = setInterval(function(){
				_this._teb(i);
				i++;
				i>4?i=0:i=i;
		},3000);		
	},
});
$(window).banner();