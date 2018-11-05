$(function(){
	$("#quit").click(function() {
		layer.open({
			type: 1,
			content: $('.warm').html(),
			anim: 'up',
			scrollbar: false,
			shadeClose: false,
			style: 'position:fixed;bottom:50%;left: 8%; right:8%;height: auto;border:none;border-radius:6px'
			
		});
		
	})
	//点击确定退出登录
	$(document).on("click", ".warm_login", function(){
		// localStorage.removeItem('token');
		// localStorage.removeItem('da_login');
		// localStorage.removeItem('memberLevel');
		// localStorage.removeItem('parentUserHasMark');
		window.location.href = '../home/index.html';
		});
		$(document).on("click", ".warm_cancel", function() {
			layer.closeAll('page');

	});
})