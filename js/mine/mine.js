var search=location.search;
//2、如果还想要获取确定的数据，可以解析字符串
function parse(search){
    //从第二个字符开始截取   ，获取到第二个开始后面所有的字符
    var str=search.substring(1);
    var result={};
    //分割字符串  -->产生字符串数组
    var strs=str.split("&");
    //遍历数组中的每一个元素
    strs.forEach(function(v){
        //伪代码：v="age=18"
        var keyvalue=v.split("=");
        var name=keyvalue[0];
        var value=keyvalue[1];
        result[name]=value;
    })
    return result;
}

var r=parse(search);
$('#set_nickname').html(r.nickname)
