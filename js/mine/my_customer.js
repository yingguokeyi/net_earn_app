// 复制功能
var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    layer.open({
		content: '复制成功',
		skin: 'msg',
		time: 2
	});
});

clipboard.on('error', function(e) {
    // console.log(e);
});