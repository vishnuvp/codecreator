$(document).ready(function(){
/*var firstId = "#" + $("#tab-ul li.first").attr("id").split("-").pop();
$(firstId).fadeIn("slow");
$("#tab-ul li.first").toggleClass("first active");
*/

$("#cc-tbtn").click(function(){
var tabHead = '[tab: '+ $("#cc-ttl").val() +']\n\r';
$("#code").val(tabHead + $("#cc-tcnt").val());;

});

$("#cc-ebtn").click(function(){
var tabHead = '[expand title="'+ $("#cc-expttl").val() +'"]';
$("#expcode").val(tabHead + $("#cc-expcnt").val());;

});

$("#cc-tblbtn").click(function(){
var imgPath = (imgPath=$("#cc-rw1img").val()) == ""?'/tcsbancs/wp-content/uploads/2013/09/bancsPublish18.jpg':imgPath;
var row1Cont = $("#cc-rw1cnt").val();
var content = '<tr><td><img alt="" src="'+ imgPath+'" /></td><td>'+row1Cont+'</td></tr>'
$("#tblcode").fadeOut().val(content).fadeIn();
});

$("#cc-brobtn").click(function(){
var broPath = (broPath=$("#cc-brolink").val()) == ""?'http://www.tcs.com/SiteCollectionDocuments/Brochures/BaNCS_Brochures/TCSBaNCS-Brochure-Core-Banking-0713-1.pdf':broPath;
var broTitle = $("#cc-brottl").val();
var content = '<p class="custom-533bnk036-sbblink"><a style="color: inherit; font-size: inherit;" href="'+broPath+'" target="_blank"><i class="download_icon"></i> '+broTitle+'</a></p>'
$("#brocode").val(content);;
});
$("#tab-ul.collapsed").toggleClass("expanded collapsed");
$("#tab-ul li").on("click",function(){
$("#tab-ul").toggleClass("expanded collapsed");

var prev = "";
if($("#tab-ul li.active").attr("id")) {
prev = "#" + $("#tab-ul li.active").attr("id").split("-").pop();
}
$("#tab-ul li.active").toggleClass("normal active");
$(this).toggleClass("normal active");
var id = "#" + $(this).attr("id").split("-").pop();
if(prev!="") {
$(prev).fadeOut("fast", function(){
$(id).fadeIn("slow");
});
}
else {
$(id).fadeIn("slow");
}
});

$(".click2copy").focus(function(){
$(this).select();
});
});
