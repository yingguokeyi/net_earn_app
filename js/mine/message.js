$(function(){
	$(".message_title li").click(function() {
		$(this).children("a").addClass("tabhover").parent().siblings().find("a").removeClass("tabhover");
		$(this).find("a .message_line").show().parents().siblings().find("a .message_line").hide();
	})
})
