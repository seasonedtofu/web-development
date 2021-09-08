$("button").click(function(){
    $("h1").animate({opacity:0.5});
});

$("button").click(function(){
    $("h1").css("color","blue");
});

$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});
