var data = {
	setting:[{imageUrl:"./img/b1.png"},
			{imageUrl:"./img/b2.png"},
			{imageUrl:"./img/b3.jpg"},
			{imageUrl:"./img/b4.jpg"},
			{imageUrl:"./img/b4.jpg"},],
	type:"tab",
	indicator:2,
};
console.log(data);
$(".banner").banner(data);
$(".nav-ul li").mouseenter(function(){
	$(this).children("div").slideDown();
});
$(".nav-ul li").mouseleave(function(){
	$(this).children("div").slideUp();
});