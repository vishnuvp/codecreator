$(document).ready(function(){
$("#tab-ul li.first").toggleClass("first active");
$("#cc-tbtn").click(function(){
var tabHead = '[tab title="'+ $("#cc-ttl").val() +'"]';
$("#code").val(tabHead + $("#cc-tcnt").val());;

});

$("#cc-ebtn").click(function(){
var tabHead = '[expand title="'+ $("#cc-expttl").val() +'"]';
$("#expcode").val(tabHead + $("#cc-expcnt").val());;

});
$("#tab-ul li").on("click",function(){
$("#tab-ul li.active").toggleClass("normal active");
$(this).toggleClass("normal active");
var id = "#" + $(this).attr("id").split("-").pop();
$(".switch").fadeOut("slow", function(){
$(id).fadeIn("slow");
});
});

$("#code").focus(function(){
$(this).select();
});
});
