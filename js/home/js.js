var ban_img = $(".ban_img1");
touch_val(ban_img);
var ban_img1 = $(".ban_img2");
touch_val(ban_img1);
var ban_img1 = $(".ban_img3");
touch_val(ban_img1);
var ban_img1 = $(".ban_img4");
touch_val(ban_img1);

function touch_val(obj) {
	var start, end;
	obj.on('touchstart', function(e) {
		var _touch = e.originalEvent.targetTouches[0];
		start = _touch.pageX;
	});
	obj.on('touchmove', function(e) {
		var _touch = e.originalEvent.targetTouches[0];
		var _x = _touch.pageX;
	});
	obj.on('touchend', function(e) {
		var _touch = e.originalEvent.changedTouches[0];
		end = _touch.pageX;
		var touch_length = parseInt(end) - parseInt(start);
		obj.find("a").addClass("one_second");
		if(touch_length > 40) {
			var prev_val = obj.find(".rotating").prev();
			if(prev_val.length != 0) {
				obj.find(".rotating").prev().addClass("mark");
				obj.find(".rotating").removeClass("mark");
				obj.find("a.mark").siblings().removeClass("rotating");
				obj.find("a.mark").addClass("rotating");
				obj.addClass("one_second");
				var ban_a_width = obj.find("a").width();
				var ban_left = parseInt(obj.css("left"));
				var new_left = ban_a_width + ban_left;
				obj.css("left", new_left + "px");
			}
		} else if(touch_length < -40) {
			var prev_r = obj.find(".rotating").next();
			if(prev_r.length != 0) {
				obj.find(".rotating").next().addClass("mark");
				obj.find(".rotating").removeClass("mark");
				obj.find("a.mark").siblings().removeClass("rotating");
				obj.find("a.mark").addClass("rotating");
				obj.addClass("one_second");
				var ban_r_width = obj.find("a").width();
				var ban_r_left = parseInt(obj.css("left"));
				console.log("宽是：" + ban_r_width);
				console.log("left是：" + ban_r_left);
				var new_r = -ban_r_width + ban_r_left;
				obj.css("left", new_r + "px");
			}
		}
	});
}