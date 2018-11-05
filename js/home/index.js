var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    observer: true, //调完接口不能翻页解决方法，修改swiper自己或子元素时，自动初始化swiper  
    observeParents: true, //调完接口不能翻页解决方法，修改swiper的父元素时，自动初始化swiper 

});

// 判断是否安装QQ和微信
// $(function(){
// 	$(".sense").click(function() {
// 		layer.open({
// 			type: 1,
// 			content: $('.warm').html(),
// 			anim: 'up',
// 			scrollbar: false,
// 			shadeClose: false,
// 			style: 'position:fixed;bottom:50%;left: 8%; right:8%;height: auto;border:none;border-radius:6px'
			
// 		});
		
// 	})
// 	//点击确定退出登录
// 	$(document).on("click", ".warm_login", function(){
// 		window.location.href = '../home/index.html';
// 		});
	
// })
// 已经安装QQ和微信，点击一键分享弹框
$(function(){
	$(".sense").click(function() {
	   $(".shade").show();
		
	})
	//点击确定退出
		$(document).on("click", ".ensconce", function() {
			$(".shade").hide();

	});
})

// 点击刷新按钮进行刷新
$(function(){
    $("#re").click(function(){
        window.location.reload();
    })
    
})
