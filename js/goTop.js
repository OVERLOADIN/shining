$("#goTop").on('click',function() {
	$("html,body").animate({
		scrollTop: 0
	},1000,"easeOutExpo", function(){
        $('body').trigger('scrollDone');
    });
})

$(".toggle-button").on("click",function() {
	$(".nav2").toggle("slow");
})
$(".nav2>li").on("mouseenter",function() {
	$(this).css("backgroundColor","#cfdb00");
	$(this).children().css("color","white");
})
$(".nav2>li").on("mouseleave",function() {
	$(this).css("backgroundColor","white");
	$(this).children().css("color","black");
})
$(".nav2>li>a").on('click',function() {
	window.location.href = $(this).attr('href');
})
$(".nav2>li").on('click',function() {
	if($(this).attr('class') != "active"){
		$(this).children().trigger('click');
	}
})

var timer = setInterval(function() {
	$("embed").height($("body").width()*0.6);
},10)