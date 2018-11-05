$('#feed_sub').click(function(){
	if($('#feed_text').val()!=''){
		layer.open({
			content: '感谢您的宝贵意见，我们会及时处理，谢谢',
			skin: 'msg',
			time: 6
		});
	}
	
})