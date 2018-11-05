$('#save').click(function(){
	var intVal = $('#int').val();
	if(intVal != ''){
		window.location.href="mine.html?nickname="+intVal;
	}
})